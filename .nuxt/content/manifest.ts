export const checksums = {
  "experiences": "v3.5.0--yR-e9mTmvb3Fa_BwLO0PyS0DfAJC9JlA6ut3KECc8d8",
  "education": "v3.5.0--0RsDSlpKFdny7pP9looOYSUogbY8Zc5i3s4GTmGdCKs"
}
export const checksumsStructure = {
  "experiences": "ZV89WHth6R-2s64VLDJqDi_y0SzwWExei9wMqRd7Lic",
  "education": "lFVPiVQj7DaMBBiHNk6TkBreotThkE89nIYm9Ns3cvA"
}

export const tables = {
  "experiences": "_content_experiences",
  "education": "_content_education",
  "info": "_content_info"
}

export default {
  "experiences": {
    "type": "data",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "startDate": "date",
      "endDate": "json",
      "location": "string",
      "company": "string",
      "title": "string",
      "description": "json",
      "highlights": "json",
      "pathToLogo": "string",
      "tags": "json"
    }
  },
  "education": {
    "type": "data",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "startDate": "date",
      "endDate": "date",
      "location": "string",
      "school": "string",
      "degree": "string",
      "gpa": "number",
      "description": "json",
      "highlights": "json",
      "pathToLogo": "string",
      "tags": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}