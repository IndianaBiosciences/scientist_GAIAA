"""
dka_utils.py
------------
Author: Daniel H Robertson

Utility functions for pubchem

"""
import sys
import os
import json
import csv
import logging

logger = logging.getLogger()

# does a file exist
def file_exists(my_file):
    """ utility function to see if file exists """
    if not os.path.isfile(my_file):
        return False
    return True

# does a file exist
def remove_file(my_file):
    """ utility function to remove file """
    os.remove(my_file)

# read a json from file
def read_json(in_file):
    """ utility function to read a json object from a file """
    my_data = list()

    if not os.path.isfile(in_file):
        logger.critical("Unable to locate defined input json file \"" + in_file +"\" ... skipping")
        return my_data

    with open(in_file) as file_ref:
        json_data = json.load(file_ref)

    logger.info("Read " + str(len(json_data)) + " items from \"" + in_file + "\"")
    return json_data

# read a json from file
def write_json(out_file, json_data):
    """ utility function to write a json object to file """
    try:
        fp = open(out_file, 'w')
        json.dump(json_data, fp, indent=2)
        fp.close()
    except:
        logger.critical("Error saving json_data to file \"" + out_file +"\" ... skipping")

def read_json_table(in_file):

    json_table = list()
    json_data = read_json(in_file)
    if not json_data or 'Table' not in json_data:
        return None

    table_json = json_data['Table']
    if not 'ColumnNames' in table_json or not 'Row' in table_json:
        return None

    columns = table_json['ColumnNames']
    rows = table_json['Row']
    for row in rows:
        if 'Cell' not in row:
            return None
        row_values = dict()
        for i in range(0, len(row["Cell"])):
            element = row["Cell"][i]
            for k in element.keys():
                row_values[columns[i]] = element[k]
        json_table.append(row_values)

    return json_table
