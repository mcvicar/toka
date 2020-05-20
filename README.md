# Toka
This is a proof of concept for a serverless based, multi-tenancy, multilingual, API driven CMS.

A tenant's content store is configurable by both "content types" and within those types as "content blocks". 

The CMS interface uses Vue.js and Amplify (Cognito, DynamoDB, Lambda, API Gateway, etc) and would generate a read only REST API for a tenant site to call.

**I would not use this in a production environment right now**

Things it does not do right now;
 * User's per site and ACLs
 * Publishing workflow
 * Preview of site content
 * File uploads
 
Things that is does do;
 * Create a user and assign them to a "site"
 * Configure content types for a site
 * Configure content blocks for a content type
 
Some things I'd like it to do;
 * Have a DynamoDB stream to launch other configurable tasks based on content changes
 * SEO and content readability analysis built in
 * Dynamic concept groupings - think tagging but with a better editorially curated 

## Why the hell would you do this?
I've been designing, building and managing content management systems, and sites that rely on a CMS for two over decades. 

There's a fair amount I've learnt in doing that, but there's some concepts I've not seen or not tried to build myself that I'm curious to give a go. Those ideas have been scratching around like a stone in my shoe, hence the [name](https://maoridictionary.co.nz/search?idiom=&phrase=&proverb=&loan=&histLoanWords=&keywords=toka). 

### No really? What about using or extending [Drupal|Ghost|Etc] CMS?
Like I said intellectual curiosity. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

Should be as simple as

```
npm install
```

Assuming you've got the aws cli and amplify set up


## Running the tests

Cool story bro!

No seriously there are some tests, mainly on the lambda side of things...

## Deployment
Like are you really sure you want to do this?
```
amplify publish
```
Like really, really sure?

## Built With

* [Vue.js](https://vuejs.org/) - The web framework used for the CMS interface
* [Amplify](https://github.com/aws-amplify/amplify-js) - Framework for AWS integration and services
* [Sir Trevor](https://madebymany.github.io/sir-trevor-js/) - Used to manage the content blocks

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

I would use [SemVer](http://semver.org/) for versioning if a production ready version was ever required.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* To all the CMS's I've used before, and the blogging platforms that claim to be a CMS
