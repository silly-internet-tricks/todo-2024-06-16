#!/bin/sh
./db-teardown.sh && ./db-setup.sh && ./db-seed.sh
