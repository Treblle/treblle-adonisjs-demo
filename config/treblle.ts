import Env from '@ioc:Adonis/Core/Env'

const treblleConfig = {
  /*
  |--------------------------------------------------------------------------
  | Treblle API Key
  |--------------------------------------------------------------------------
  |
  | Your API key is used to configure the Treblle SDK packages.
  |
  */
  apiKey: Env.get('TREBLLE_API_KEY'),
  /*
  |--------------------------------------------------------------------------
  | Treblle Project ID
  |--------------------------------------------------------------------------
  |
  | The ID for your Treblle Project found in your Treblle dashboard.
  |
  */
  projectId: Env.get('TREBLLE_PROJECT_ID'),
  /*
  |--------------------------------------------------------------------------
  | Additional fields to mask
  |--------------------------------------------------------------------------
  |
  | By default, Treblle masks certain fields like password before it ever leaves
  | your app, you can optional pass an array of other fields you want masked.
  */
  additionalFieldsToMask: ['role'],
  /*
  |--------------------------------------------------------------------------
  | Show errors
  |--------------------------------------------------------------------------
  |
  | Whether errors in your app should be visible in the Treblle dashboard
  | Defaults to true
  */
  showErrors: true,
}

export default treblleConfig
