#!/bin/sh

# Todosテーブル
aws dynamodb create-table \
--cli-input-json file://todos.json  \
--region ap-northeast-1 \
--endpoint-url http://dynamodb-local:8000  > /dev/null

