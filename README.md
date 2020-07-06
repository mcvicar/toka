# Toka
This is a proof of concept for a serverless based, multi-tenancy, multilingual, API driven CMS.

A tenant's content store is configurable by both "content types" and within those types, as "content blocks". 

The CMS interface uses Vue.js and Amplify (Cognito, DynamoDB, Lambda, AppSync, API Gateway, etc) and would in theory generate a read only REST API for a tenant site to call.

**I would not use this in a production environment right now**

Things it does not do right now;
 * Create a user and assign them to a "site"
 * Configure content types for a site
 * Configure content blocks for a content type
 * Create content
 
Things that is does do;
 * SEO and content readability analysis built into content editing
 
Things I'd like to add;
 * User's per site and ACLs
 * Publishing workflow
 * Preview of a tenant site
 * File/Media uploads 
 
Some things I'd like it to do;
 * Real time collaboration on document editing using AppSync
 * Have a DynamoDB stream(s) to launch other configurable tasks based on content changes
 * Dynamic concept groupings - think tagging but with better editorially curated 
 * Personalised content recommendations using Amazon Personalize
 * Offline editing support using AppSync

## Why the hell would you do this?
I've been architecting, building and managing content management systems, and sites that rely on a them, for over two decades. 

There's a fair amount I've learnt in doing that, but there's some concepts I've not seen or not tried to build myself. The initial "thought experiment" was how to do content in DynamoDB using some of the [Advanced Design Patterns](https://www.youtube.com/watch?v=HaEPXoXVf2k) that Rick Houlihan advocates. 
That idea (plus a few others) had been scratching around like a stone in my shoe for a few years, hence the [name](https://maoridictionary.co.nz/search?idiom=&phrase=&proverb=&loan=&histLoanWords=&keywords=toka), and it morphed into this.

### No really? What about using or extending [Drupal|Ghost|Etc] CMS?
Like I said intellectual curiosity. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Things you need to get up and running

* An AWS account
* An AWS IAM role/profile set-up that can push stuff through amplify / the cli
* Node

### Installing

Should be as simple as

```
npm install
```

Assuming you've got the aws cli and amplify set up


## Running the tests

Cool story bro!

No seriously there are some tests, mainly on the lambda side of things... I really should do more... or you could do a pull request with some if you're interested?

## Deployment
Like are you really sure you want to do this?
```
amplify publish
```
Are you really, really sure about that?

## Built With

* [Vue.js](https://vuejs.org/) - The web framework used for the CMS interface
* [Amplify](https://github.com/aws-amplify/amplify-js) - Framework for AWS integration and services
* [Editor.js](https://github.com/codex-team/editor.js) - Used to manage the content blocks

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

I would use [SemVer](http://semver.org/) for versioning if a production ready version was ever required.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

🎵 To all the CMSs I've used before
🎵 Who traveled in and out my door
🎵 I'm glad they came along
🎵 I dedicate this repo
🎵 To all the CMSs I've loved before (and the blogging platforms that claim to be a CMS)
