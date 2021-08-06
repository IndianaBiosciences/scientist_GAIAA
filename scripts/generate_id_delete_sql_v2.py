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

id_types = ['activities']

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
            id_list.append(int(id))
            nread += 1
    file_ref.close()

    logger.info("\nRead {} ids from \"{}\"\n\n".format(len(id_list), ids_file))

    return id_list

def print_sql_list(table, id_name, id_list):
    sql = 'DELETE FROM {} WHERE {} in ('.format(table, id_name)
    for i in range(0, len(id_list)):
        separator = ', '
        if i == len(id_list)-1:
            separator = ''
        sql += "{}{}".format(id_list[i], separator)
    sql += ");"
    print(sql)

def print_sql_between(table, id_name, index_1, index_2):
    sql = 'DELETE FROM {} WHERE {} > {} AND {} < {};'.format(table, id_name, index_1, id_name, index_2)
    print(sql)

def generate_delete_sql(ids_file, ids_type, i_col):

    # read in ids file first.
    ids_list = read_ids_file(ids_file, i_col)
    if not len(ids_list):
        logger.critical("Did not read any ids from input file {} ... exiting".format(ids_file))
        return

    ids_list.sort()
    if len(ids_list) < 100:
        logger.debug("ids_list: {}".format(ids_list))
    else:
        logger.debug("ids_list: {} ... {}".format(ids_list[0:50], ids_list[-50:-1]))

    # get all ids and set the table/id_type for sql
    if ids_type == "activities":
        table = "activities"
        id_name = "activity_id"
    elif ids_type == "molecules":
        table = "molecule_dictionary"
        id_name = "molregno"
    elif ids_type == "structures":
        table = "compound_structures"
        id_name = "molregno"
    elif ids_type == "properties":
        table = "compound_properties"
        id_name = "molregno"
    elif ids_type == "hierarchy":
        table = "molecule_hierarchy"
        id_name = "molregno"
    elif ids_type == "synonyms":
        table = "molecule_synonyms"
        id_name = "molregno"
    else:
        logger.critical("Unknown type \"{}\". Must be in {} ... exiting".format(ids_type, id_types))
        exit()

    min = ids_list[0]
    max = ids_list[-1]
    logger.info("len(ids_list): {} min: {} max: {}".format(len(ids_list), min, max))

    sql = 'DELETE FROM {} WHERE {} < {};'.format(table, id_name, min)
    print(sql)
    sql = 'DELETE FROM {} WHERE {} > {};'.format(table, id_name, max)
    print(sql)

    growing_list = list()
    for i in range(1, len(ids_list)):
        d_index = ids_list[i] - ids_list[i-1]
        if d_index > 1:
            logger.debug('i: {} ids_list[i-1]: {} ids_list[i]: {} d_index: {}'.format(i, ids_list[i-1], ids_list[i], d_index))
            if d_index < 10:
                for index in range(ids_list[i-1]+1, ids_list[i]):
                    growing_list.append(index)
            else:
                #print("HERE 2")
                if len(growing_list):
                    print_sql_list(table, id_name, growing_list)
                growing_list = list()
                print_sql_between(table, id_name, ids_list[i-1], ids_list[i])
            if len(growing_list) > 100:
                print_sql_list(table, id_name, growing_list)
                growing_list = list()
            logger.debug("growing_list: {}".format(growing_list))


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
