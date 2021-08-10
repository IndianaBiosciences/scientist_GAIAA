"""
create_sdf.py
------------
Author: Daniel H Robertson

Part of the IBRI cheminformatics system

Specific utilities for working with chembl data
"""
import sys
import argparse
import logging
import pprint
import pubchem_utils

#TODO: add flag for verbose
#TODO: add flag to switch between getting results from molecules vs targets

parser = argparse.ArgumentParser(prog='get_total_cids.py',
    description='count total # cids from pubchem search summary table')
parser.add_argument('-f', '--file', dest='in_file', help='txt file containing pubchem search table json')
parser.add_argument('-v', '--verbose', default=False, action="store_true", help='verbose output')

args = parser.parse_args()
# create logger
logger = logging.getLogger()
logger.level = logging.INFO if args.verbose else logging.ERROR
stream_handler = logging.StreamHandler(sys.stderr)
logger.addHandler(stream_handler)

# fetch and write the assay results
table_json = pubchem_utils.read_json_table(args.in_file)
if not table_json:
    print('Error reading file {}'.format(args.in_file))
    exit()

ids = dict()
for row in table_json:
    if 0 and row['aid'][0] == 504357:
        for k in row.keys():
            if k != 'cids' and k != 'sids':
               print(k, pprint.pformat(row[k]))
        exit()
    if 'aid' not in row or 'cids' not in row:
        print("Can't find cids element in the rows -- not the right format? exiting ...")
        exit()
    if row['aidsrcid'][0] != 43 and len(row['cids']) < 100000:
        print("{}\t{}\t{}\t{}".format(row['aid'][0],row['aidextid'], row['aidcategories'],len(row['cids'])))
        for id in row['cids']:
            if id not in ids:
                ids[id] = 0
            ids[id] += 1

n_cids = len(ids.keys())
print("Total cids: {}".format(n_cids))
