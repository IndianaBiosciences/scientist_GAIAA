"""
generate_tid_delete_list.py
------------
Author: Daniel H Robertson

Part of the IBRI informatics system

"""
import argparse
import os
import sys
import csv
import logging

import chem_utils
from chem_utils.data.db import db_chembl

id_types = ['assays', 'targets', 'molecules']

def read_ids_file(ids_file, i_col):

    id_list = list()
    if not os.path.isfile(ids_file):
        logger.critical("Unable to locate defined input file \"{}}\" for ids ... skipping".format(ids_file))
        return []

    # read file
    nread = 0
    with open(ids_file) as file_ref:
        for line in file_ref.readlines():
            id = line.rstrip()
            id = int(id.split(" ")[i_col])
            id_list.append(id)
            nread += 1
    file_ref.close()

    logger.info("\nRead {} ids from \"{}\"\n\n".format(len(id_list), ids_file))

    return id_list

def generate_delete_sql(ids_file, ids_type, i_col):

    # read in ids file first.
    ids_list = read_ids_file(ids_file, i_col)
    if not len(ids_list):
        logger.critical("Did not read any ids from input file {} ... exiting".format(ids_file))
        return

    if len(ids_list) < 10000:
        logger.debug("ids_list: {}".format(ids_list))
    else:
        logger.debug("ids_list: {}".format(ids_list[0:1000]))

    # get all ids and set the table/id_type for sql
    db_chembl.set_database('oprm1_chembl_29')
    all_ids = list()
    if ids_type == "assays":
        table = "assays"
        id_name = "assay_id"
        all_ids = db_chembl.get_all_assay_ids()
    elif ids_type == "targets":
        table = "target_dictionary"
        id_name = "tid"
        all_ids = db_chembl.get_all_tids()
    elif ids_type == "molecules":
        table = "molecule_dictionary"
        id_name = "molregno"
        all_ids = db_chembl.get_all_molregnos()
    else:
        logger.critical("Unknown type \"{}\". Must be in {} ... exiting".format(ids_type, id_types))
        exit()

    logger.info("Retrieved {} ids for type {} from database \"{}\"".format(len(all_ids), ids_type, db_chembl.get_selected_database()))

    missing_ids = list()
    total = len(all_ids)
    to_delete = all_ids
    for id in ids_list:
        try:
            to_delete.remove(id)
        except:
            missing_ids.append(id)
    if len(missing_ids):
        logger.info("Unable to find {} ids in list".format(len(missing_ids)))
#    for id in all_ids:
#        if id not in ids_list:
#            to_delete.append(id)
    logger.info("Need to delete {} of {} ids not deleted: {}".format(len(to_delete), total, total-len(to_delete)))

    chunk = 1000
    number = int(len(to_delete)/chunk) + 1
    index = 0
    for i in range(0, number):
        sql = 'DELETE FROM {} WHERE {} in ('.format(table, id_name)
        for j in range(0, chunk):
            separator = ', '
            if j == chunk-1 or index == len(to_delete)-1:
                separator = ''
            if index < len(to_delete):
                sql += "{}{}".format(to_delete[index], separator)
            index += 1
        sql += ");"
        print(sql)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog='generate_assay_id_delete_sql.py',
        description='subselect records to only those within the list.')
    parser.add_argument('-i', '--ids_file', dest='ids_file', help='txt file of ids to keep', required=True)
    parser.add_argument('-t', '--ids_type', dest='ids_type', help='ids_type in {}'.format(id_types), required=True)
    parser.add_argument('-c', '--i_col', dest='i_col', type=int, default=0, help='in case ids in ids_file is not first column')
    parser.add_argument('-v', '--verbose', dest='verbose', action="store_true", default=False, help='turn on addition information that is sent to stderr')
    parser.add_argument('-d', '--debug', dest='debug', action="store_true", default=False, help='turn on very verbose debug information to stderr')

    args = parser.parse_args()
    # create logger
    logger = logging.getLogger()
    logger.level = logging.WARN
    if args.verbose:
        logger.level = logging.INFO
    if args.debug:
        logger.level = logging.DEBUG
    stream_handler = logging.StreamHandler(sys.stderr)
    logger.addHandler(stream_handler)

    generate_delete_sql(args.ids_file, args.ids_type, args.i_col)
