# UI Automation In Metabase:
Entity Loaders:
Metabase frontend uses Entity Loaders in their framework. Entity loaders are used to abstract away calling the API, handling loading and error state, cache previously loaded objects, invalidating the cache (in some cases) and let you easily perform updates, or create new items. Metabase used entity loaders to create their new features and also helful in loading certain data on the frontend. For example below code is going to load information about a specific database for a new page.

```
import React from "react";
import Databases from "metabase/entities/databases";

@Databases.load({ id: 4 })
class MyNewPage extends React.Component {
  render() {
    const { database } = this.props;
    return (
    );
  }
}
```

Forms Framework:
Metabase used custom React and reduc-form library in their frontend. This is a helpful library used for creating and validating different in UI. For example in below code name and password field is validated using validate API.

```
import Form, { FormField, FormFooter } from "metabase/containers/Form";

<Form onSubmit={values => alert(JSON.stringify(values))}>
  <FormField
    name="email"
    placeholder="bob@metabase.com"
    validate={validate.required()}
  />
  <FormField
    name="password"
    type="password"
    validate={validate.required().passwordComplexity()}
  />
  <FormFooter />
</Form>;
```

# Api Automation In Metabase:
The API is tightly coupled with the front end and is subject to change between releases, it can change version to version. So that's the reason you have to change code of API of Metabase after every update. Metabase API accepts the HTTP verbs and parameters. Following is the framework that how metabase API interaction takes place:

Authentication:
The authentication end point is POST /api/session, which accepts a username and password. The response will be a JSON dict with an id key {"id": "abcd"} where the value is the session key.

```
let response = await got.post("http://localhost:3000/api/session", {
  json: { username: "greg@metabase.com", password: "database1" },
  responseType: "json",
});
session_id = response.body.id;
headers = { "X-Metabase-Session": session_id };
```

Getting Data:
To retrieve data we use GET /api/database. You can easily extract data according to your requirements in CSV, JSON, XLSX. You have to provide filter according to the way you want your data.For example to get results as CSV, send to /api/dataset/csv, for JSON /api/dataset/json, for XLSX /api/dataset/xlsx.

```
response = await got.get("http://localhost:3000/api/card", {
  responseType: "json",
  headers: headers,
});
// filter for public questions
questions = response.body.filter((q) => q.public_uuid);
console.log(`${questions.length} public of ${response.body.length} questions`);
```
