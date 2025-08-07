// Based on https://aws.amazon.com/blogs/compute/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-lambdaedge/
"use strict";
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;

  let target = request.uri;

  // Check whether the URI is a directory.
  if (target.endsWith("/")) {
    target += "index.html";
  }
  // Check whether the URI is missing a file extension.
  else if (!target.includes(".")) {
    target += "/index.html";
  }

  request.uri = target;

  return callback(null, request);
};
