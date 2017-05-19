## Brief
Build a web page with a search box that queries our search endpoint.

### Base URL:
https://avspv9f312.execute-api.us-west-2.amazonaws.com/v0/

All parameters are the same, listed below.

/channel - Get channel data when passed a channel url.

/post - Get post data when passed a post url.

/timeline - Get the most recent set of posts from a channel when passed a channel url.


### Parameters:
**access_token:** REQUIRED. string, currently required because the endpoint is public. Needs someone else's auth.

**url:** OPTIONAL. Full (including prefix) url of the channel or post you want data on. If this is not given, id & network must be passed.

**id:** OPTIONAL. The post or channel id you want to query. Must be accompanied by the network parameter. Not currently supported for all endpoints, so please use url for right now.

**network:** OPTIONAL. The network the passed id is related to. If url is passed, this is not used.


## Considerations
1. Error handling: What happens if the URL is invalid or returns no results or the endpoint is down?
2. Different APIs return different data for posts and channels. For example, Youtube is the only platform that returns dislike counts for their posts. Youtube and Instagram return no share counts, while Facebook and Twitter do. How do you handle that?
