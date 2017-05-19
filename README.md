## Brief
Build a web page with a search box that queries our social media search endpoint. A user will come to the page and enter the URL of either a social media post or a channel page, and the page should display information about it depending on what is returned. The goal is to get it as close to the design as possible. You can use any framework(s) of your choice.

Design for if a post is returned: 
  - https://github.com/brandsoulmates/front-end-interview/blob/master/post_youtube.png

Designs for if a channel is returned: 
  - https://github.com/brandsoulmates/front-end-interview/blob/master/channel_youtube.png
  - https://github.com/brandsoulmates/front-end-interview/blob/master/channel_twitter.png
  - https://github.com/brandsoulmates/front-end-interview/blob/master/channel_facebook.png
  
Platform colors:
  - facebook: rgb(61, 90, 152);
  - twitter: rgb(38, 169, 224);
  - instagram: rgb(58, 58, 58);
  - youtube: rgb(212, 39, 40);

### Base URL:
https://avspv9f312.execute-api.us-west-2.amazonaws.com/v0/search

This URL will return channel data if it is given a channel URL, or post + channel data if a post is passed. Currently, our search endpoint can handle Youtube, Twitter, Instagram, and Facebook.

Channel examples:
  - https://www.youtube.com/user/ConnorFranta
  - https://www.instagram.com/badrap_advocacy/?hl=en
  - https://www.facebook.com/IFeakingLoveScience/?fref=mentions

Post examples:
  - https://www.youtube.com/watch?v=yzBIarGJjHk
  - https://twitter.com/MichelleObama/status/860512548331954176
  - https://www.instagram.com/p/BURxT6PjY-z/?taken-by=dogsofinstagram&hl=en

### Parameters:

**access_token:** REQUIRED. string (we will give this to you)

**url:** REQUIRED. Full (including prefix) url of the channel or post you want data on. If this is not given, id & network must be passed.

### Response format:

Some keys will be present on all requests, some will vary by the platform!

Post example response: https://github.com/brandsoulmates/front-end-interview/blob/master/post_example_response.json

Channel example response: https://github.com/brandsoulmates/front-end-interview/blob/master/channel_example_response.json

## Considerations

1. Error handling: What happens if...
   - the URL is invalid?
   - no results are returned?
   - the endpoint is down?
   
2. Each social media platform API queried by our endpoint returns different data for posts. For example, Youtube is the only platform that returns dislike counts for their posts. Youtube and Instagram return no share counts, while Facebook and Twitter do. How do you handle that? You can refer to this chart of what each platform returns: https://github.com/brandsoulmates/front-end-interview/blob/master/post-response.png

3. The page should indicate that it is making a call to the endpoint with text or a loading animation/image.

4. We have primarily focused on Youtube, so you may want to too ;)

## Extra Credit

Use the timeline endpoint (https://avspv9f312.execute-api.us-west-2.amazonaws.com/v0/timeline, also takes an access_token and url) to return some recent posts if you get back a channel, and display them under the channel info.
