// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed

  // The following are document types which will appear
  // in the studio.

  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  types: schemaTypes.concat([works, testimonials, brands, abouts, skills, workExperience, experiences, contact
  ]),
})
