export type AmplifyDependentResourcesAttributes = {
  storage: {
    todoappdb: {
      Name: 'string'
      Arn: 'string'
      StreamArn: 'string'
      PartitionKeyName: 'string'
      PartitionKeyType: 'string'
      Region: 'string'
    }
  }
  function: {
    todoapptraining: {
      Name: 'string'
      Arn: 'string'
      Region: 'string'
      LambdaExecutionRole: 'string'
    }
  }
  auth: {
    todoapp: {
      IdentityPoolId: 'string'
      IdentityPoolName: 'string'
      UserPoolId: 'string'
      UserPoolArn: 'string'
      UserPoolName: 'string'
      AppClientIDWeb: 'string'
      AppClientID: 'string'
    }
  }
  api: {
    mytodoapi: {
      RootUrl: 'string'
      ApiName: 'string'
      ApiId: 'string'
    }
  }
}
