module.exports = {
  constructorArgs: {
    responses: {
      422: {
        $ref: '#/components/responses/UnprocessableEntity'
      }
    },

    components: {
      responses: {
        UnprocessableEntity: {
          description: 'Error description',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              }
            }
          }
        }
      },

      schemas: {
        Error: {
          type: 'string',
          // required: ['test'],
          // properties: {
          //   code: {
          //     type: 'string'
          //   },
          //   message: {
          //     type: 'string'
          //   }
          // }
        }
      }
    }
  },

  inputStatusCode: 422,

  inputResponseBody: { message1: 1 },

  expectedValidationError: void 0
};
