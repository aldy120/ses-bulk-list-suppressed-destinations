# Why this?
Amazon SES list-suppressed-destinations API now doesn't support automatic pagination. If you need to get more than 1000 records in suppressed list, you need to send another API call with `NextToken`.

The script demostrates how to use Node.js to bulk retrieve account-level suppressed list in SES.

# Prerequisite
- Set up AWS credentials
- Set up Region
# Example
Run
```
node retrieve-all-suppressed-destination.js
``
# Example output
Output in file `suppressed-list.json`.

```
[
  {
    "EmailAddress": "aldy120@yahoo.com",
    "Reason": "BOUNCE",
    "LastUpdateTime": "2020-05-26T06:26:20.163Z"
  },
  {
    "EmailAddress": "recipient@example.com",
    "Reason": "BOUNCE",
    "LastUpdateTime": "2020-08-18T16:12:57.098Z"
  },
  {
    "EmailAddress": "example-1757@example.com",
    "Reason": "BOUNCE",
    "LastUpdateTime": "2020-10-05T06:58:00.858Z"
  },
...
```