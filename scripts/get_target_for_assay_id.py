"""
get_target_for_assay_id.py
------------
Author: Daniel H Robertson

Part of the IBRI informatics system

compile the data needed for the ade tool
"""
import argparse
import os
import sys
import csv
import logging

import chem_utils
from chem_utils.data.db import db_chembl

def read_ids_file(ids_file):

    id_list = list()
    if not os.path.isfile(ids_file):
        logger.critical("Unable to locate defined input file \"{}}\" for ids ... skipping".format(ids_file))
        return []

    # read file
    nread = 0
    with open(ids_file) as file_ref:
        for line in file_ref.readlines():
            id = line.rstrip()
            # hack
            id = id.split(" ")[1]
            id_list.append(id)
            nread += 1
    file_ref.close()

    logger.info("\nRead {} ids from \"{}\"\n\n".format(len(id_list), ids_file))

    return id_list

csv_fields = [
    'assay_id', 'chembl_id', 'tid', 'target_chembl_id'
]

def get_target_for_assay_id(ids_file, out_file):

    ids_list = read_ids_file(ids_file)

    if not len(ids_list):
        logger.critical("Did not read any ids from input file {} ... exiting".format(ids_file))
        return

    assay_details = db_chembl.assay_details_from_assay_ids(ids_list)
    print(assay_details)

    #
    # either use out_file if defined or stdout otherwise
    #
    out_stream = sys.stdout
    if (out_file):
        out_stream = open(out_file, 'w', newline = '')
    csvwriter = csv.writer(out_stream, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    csvwriter.writerow(csv_fields)
    for assay in assay_details:
        new_row = list()
        for field in csv_fields:
            value = ""
            if field in assay:
                value = assay[field]
            new_row.append(value)
        csvwriter.writerow(new_row)



if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog='get_target_for_assay_id.py',
        description='retrieve target info for assay_id (not chembl_id).')
    parser.add_argument('-i', '--ids_file', dest='ids_file', help='txt file of ids to keep', required=True)
    parser.add_argument('-o', '--output', dest='out_file', help='optional output file -- otherwise write to stdout')
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

    # process the out_file argument
    out_file = args.out_file if args.out_file else ""

    get_target_for_assay_id(args.ids_file, out_file)
