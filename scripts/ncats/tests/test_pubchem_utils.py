"""
test_pubchem_utils.py
------------
Author: Daniel H Robertson

Utility functions for pubchem_utils

"""
from pathlib import Path
import os
import logging
import pubchem_utils

_null_file_ = 'my_file.txt'
_test_read_table_json_file_ = str(Path(__file__).parent / 'data/pubchem_table.json')
_test_read_json_file_ = str(Path(__file__).parent / 'data/table.json')
_test_tmp_json_file_ = str(Path(__file__).parent / 'data/tmp/table.json')

# create logger
# TODO -- fix later -- check if logger exists -- and than attach to it
logger = logging.getLogger()

def test_file_exists():
    """ test the utility function that a file exists """
    assert pubchem_utils.file_exists(_null_file_) == False
    assert pubchem_utils.file_exists(_test_read_json_file_) == True

def test_read_and_write_json():
    """ test the reading a json file """
    json_null = pubchem_utils.read_json(_null_file_)
    assert len(json_null) == 0
    assert pubchem_utils.file_exists(_test_read_json_file_) == True
    json_test = pubchem_utils.read_json(_test_read_json_file_)
    assert len(json_test) == 3
    assert json_test[0]['id'] == 1
    assert json_test[0]['value'] == 20
    assert json_test[0]['type'] == 'integer'
    assert json_test[1]['id'] == 2
    assert json_test[1]['value'] == 'text, test'
    assert json_test[1]['type'] == 'string'
    assert json_test[2]['id'] == 3
    assert json_test[2]['value'] == 2.54
    assert json_test[2]['type'] == 'float'
    if pubchem_utils.file_exists(_test_tmp_json_file_):
        pubchem_utils.remove_file(_test_tmp_json_file_)
    assert pubchem_utils.file_exists(_test_tmp_json_file_) == False
    pubchem_utils.write_json(_test_tmp_json_file_, json_test)
    assert pubchem_utils.file_exists(_test_tmp_json_file_) == True
    json_test_saved = pubchem_utils.read_json(_test_tmp_json_file_)
    assert json_test_saved == json_test
    if pubchem_utils.file_exists(_test_tmp_json_file_):
        pubchem_utils.remove_file(_test_tmp_json_file_)

def test_read_table_json():
    assert pubchem_utils.read_json_table(_null_file_) == None
    assert pubchem_utils.file_exists(_test_read_table_json_file_) == True
    json_table = pubchem_utils.read_json_table(_test_read_table_json_file_)
    assert type(json_table) == type(list())
    assert len(json_table) == 3
    assert 'col1' in json_table[0]
    assert 'col2' in json_table[1]
    assert 'col3' in json_table[2]
    assert type(json_table[0]['col1']) == type(list())
    assert type(json_table[1]['col2']) == type(str())
    assert type(json_table[2]['col3']) == type(list())
