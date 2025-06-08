# Baserow API Documentation

## Introduction

The MemberDB API provides an easy way to integrate the data with any external system. The API follows REST conventions, uses JSON to encode objects, and relies on standard HTTP codes, machine and human-readable errors to signal operation outcomes.

This documentation is generated automatically based on the tables and fields in your database. If you make changes to your database schema, it could be that the API interface has also changed. Therefore, make sure that you update your API implementation accordingly.

- **API ID:** `238789`
- **JavaScript example API client:** [wretch](https://github.com/elbywan/wretch)

## Authentication

Baserow uses a simple token-based authentication. You need to generate at least one database token in your [settings](https://api.baserow.io/api/settings) to use the API. Each database token has a set of permissions (create, read, update, delete) for each table in your database.

You can authenticate to the API by providing your token in the `Authorization: Token YOUR_DATABASE_TOKEN` HTTP header. All API requests must be authenticated and made over HTTPS.

```shell
curl \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io"
```

---

## Membership Submissions (Table ID: 566812)

### Fields

| Field ID | Name | Type | Description |
| --- | --- | --- | --- |
| `field_4551270` | Full Name | `string` | Accepts single line text. |
| `field_4551367` | Address in Qatar | `string` | Accepts multi line text. |
| `field_4551371` | Mobile Number | `string` | Accepts a phone number. |
| `field_4551373` | Email | `string` | Accepts a string that must be an email address. |
| `field_4551275` | Address in SriLanka | `string` | Accepts multi line text. |
| `field_4551277` | Marital Status | `integer` or `string`| Accepts an integer or text value representing an option. |
| `field_4551279` | Family in Qatar? | `integer` or `string`| Accepts an integer or text value representing an option. |
| `field_4551440` | QBA Membership Number | `string` | Accepts single line text. |
| `field_4551450` | Occupation | `string` | Accepts single line text. |
| `field_4551452` | Organization | `string` | Accepts single line text. |
| `field_4551455` | Years in Qatar | `string` | Accepts single line text. |
| `field_4551456` | School Period | `string` | Accepts single line text. |
| `field_4551461` | School Period To | `string` | Accepts single line text. |
| `field_4551463` | Admission Number | `string` | Accepts single line text. |
| `field_4551464` | Date Of Birth | `date` | Accepts a date in ISO format. |
| `field_4551470` | Extra Curricular Activities | `string` | Accepts multi line text. |
| `field_4551472` | Proposedby | `string` | Accepts single line text. |
| `field_4551480` | MembershipType | `integer` or `string`| Accepts an integer or text value representing an option. |

---

### API Endpoints

#### List rows

Lists rows in the `Membership Submissions` table.

*   **`GET`** `/api/database/rows/table/566812/`

**Query Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `user_field_names` | `boolean` | When `true`, field names (`My Field`) are used as keys in the response instead of the internal `field_id` (`field_123`). |
| `page` | `integer` | Defines which page of rows should be returned. Default: 1. |
| `size` | `integer` | Defines how many rows should be returned per page. Default: 100, Max: 200. |
| `filter__{field}__{filter}`| `string` | Filters the rows based on the field and filter type. See the Filters section for more details. |
| `order_by` | `string` | Optionally sorts the rows by fields. Prepends with `-` for descending order (e.g., `-My Field`). |
| `include` | `string` | A comma-separated list of field names to include in the response. |
| `exclude` | `string` | A comma-separated list of field names to exclude from the response. |

**Request Sample:**

```shell
curl \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/rows/table/566812/?user_field_names=true"
```

---

#### Get row

Fetches a single `Membership Submissions` row.

*   **`GET`** `/api/database/rows/table/566812/{row_id}/`

**Path Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `row_id` | `integer` | The unique identifier of the row that is requested. |

**Request Sample:**

```shell
curl \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  "https://api.baserow.io/api/database/rows/table/566812/{row_id}/?user_field_names=true"
```

---

#### Create row

Creates a new `Membership Submissions` row.

*   **`POST`** `/api/database/rows/table/566812/`

**Request Body Schema:**

The request body should be a JSON object containing the fields you want to set.

**Request Sample:**

```shell
curl \
  -X POST \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
      "Full Name": "string",
      "Email": "user@example.com",
      "Marital Status": "Single"
  }' \
  "https://api.baserow.io/api/database/rows/table/566812/?user_field_names=true"
```

---

#### Update row

Updates an existing `Membership Submissions` row.

*   **`PATCH`** `/api/database/rows/table/566812/{row_id}/`

**Path Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `row_id` | `integer` | The unique identifier of the row that needs to be updated. |

**Request Sample:**

```shell
curl \
  -X PATCH \
  -H "Authorization: Token YOUR_DATABASE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
      "Occupation": "string"
  }' \
  "https://api.baserow.io/api/database/rows/table/566812/{row_id}/?user_field_names=true"
```

---

#### Move row

Moves an existing `Membership Submissions` row to a new position.

*   **`PATCH`** `/api/database/rows/table/566812/{row_id}/move/`

**Path Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `row_id` | `integer` | The unique identifier of the row that needs to be moved. |

**Query Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `before_id` | `integer` | If provided, the row will be moved to be positioned before the row with the provided ID. |

---

#### Delete row

Deletes an existing `Membership Submissions` row.

*   **`DELETE`** `/api/database/rows/table/566812/{row_id}/`

**Path Parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `row_id` | `integer` | The unique identifier of the row that needs to be deleted. |

---

## File Operations

#### Upload file

Upload a file by providing the file contents.

*   **`POST`** `/api/user-files/upload-file/`
*   **Request Body:** `multipart/form-data` containing the file contents.

---

#### Upload file via URL

Upload a file by downloading it from a provided URL.

*   **`POST`** `/api/user-files/upload-via-url/`
*   **Request Body:** JSON object with a `url` key. `{"url": "https://.../asset/photo.png"}`

---

## General

#### List all tables

This endpoint lists all the tables that the token has access to.

*   **`GET`** `/api/database/tables/`

---

## Filters

| Filter | Example Value | Full Example |
| --- | --- | --- |
| `equal` | string | `filter__field_1__equal=test` |
| `not_equal` | string | `filter__field_1__not_equal=test` |
| `filename_contains` | string | `filter__field_1__filename_contains=test` |
| `has_file_type` | image | `filter__field_1__has_file_type=image` |
| `contains` | string | `filter__field_1__contains=test` |
| `contains_word` | string | `filter__field_1__contains_word=test` |
| `doesnt_contain` | string | `filter__field_1__doesnt_contain=test` |
| `doesnt_contain_word`| string | `filter__field_1__doesnt_contain_word=test`|
| `length_is_lower_than`| 3 | `filter__field_1__length_is_lower_than=3` |
| `higher_than` | 100 | `filter__field_1__higher_than=100` |
| `higher_than_or_equal`| 100 | `filter__field_1__higher_than_or_equal=100` |
| `lower_than` | 100 | `filter__field_1__lower_than=100` |
| `lower_than_or_equal`| 100 | `filter__field_1__lower_than_or_equal=100` |
| `is_even_and_whole` | true | `filter__field_1__is_even_and_whole=true`|
| `date_equal` | UTCToday | `filter__field_1__date_equal=2025-06-08` |
| `date_not_equal` | UTCToday | `filter__field_1__date_not_equal=2025-06-08` |
| `date_before` | UTCToday | `filter__field_1__date_before=2025-06-08` |
| `date_after` | UTCToday | `filter__field_1__date_after=2025-06-08` |
| `date_on_or_before`| UTCToday | `filter__field_1__date_on_or_before=2025-06-08`|
| `date_on_or_after` | UTCToday | `filter__field_1__date_on_or_after=2025-06-08` |
| `date_is_within` | UTC | `filter__field_1__date_is_within=2025-06-08` |
| `is_empty` | | `filter__field_1__empty=true` |
| `is_not_empty` | | `filter__field_1__not_empty=true` |
| `boolean` | true | `filter__field_1__boolean=true` |
| `single_select_equal`| 1 | `filter__field_1__single_select_equal=1` |
| `single_select_not_equal`| 1 | `filter__field_1__single_select_not_equal=1`|
| `link_row_has` | 1 | `filter__field_1__link_row_has=1` |
| `link_row_not_has` | 1 | `filter__field_1__link_row_not_has=1` |
| `link_row_contains`| string | `filter__field_1__link_row_contains=string` |
| `link_row_not_contains`| string | `filter__field_1__link_row_not_contains=string` |
| `multiple_select_has`| 1 | `filter__field_1__multiple_select_has=1` |
| `multiple_select_has_not`| 1 | `filter__field_1__multiple_select_has_not=1` |
| `multiple_collaborators_has`| 1 | `filter__field_1__multiple_collaborators_has=1`|
| `multiple_collaborators_has_not`| 1 | `filter__field_1__multiple_collaborators_has_not=1`|

---

## HTTP Errors

| Error Code | Name | Description |
| --- | --- | --- |
| `200` | OK | Request completed successfully. |
| `400` | Bad Request | The request contains invalid values or the JSON could not be parsed. |
| `401` | Unauthorized | Access to an endpoint without a valid database token. |
| `404` | Not Found | The requested row or table could not be found. |
| `413` | Request Entity Too Large | The request exceeded the maximum allowed payload size. |
| `500` | Internal Server Error | The server encountered an unexpected condition. |
| `502` | Bad Gateway | Baserow is restarting or an unexpected request is in progress. |
| `503` | Service Unavailable | The server could not process your request in time. |