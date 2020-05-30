import graphene 
import data.schema

class Query(data.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple queries 
    # as we begin to add more apps to the project
    pass 

schema = graphene.Schema(query=Query)