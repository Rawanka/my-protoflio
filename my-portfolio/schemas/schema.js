// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pageinfo from './pageinfo'
import skill from './skill'
import project from './project'
import social from './social'
import education from './education'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageinfo,
    skill,
    education,
    project,
    social,
  ]),
})
