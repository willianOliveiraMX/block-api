'use strict';

module.exports = {
  up: async (queryInterface) => {

    queryInterface.addConstraint('usersDomains', {
        fields: ['users_id'],
        type: 'foreign key',
        name: 'custom_users_user_domains',
        references: { //Required field
          table: 'users',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
    })
   
    queryInterface.addConstraint('usersDomains', {
        fields: ['domains_id'],
        type: 'foreign key',
        name: 'custom_components_pages_domains_constraint',
        references: { //Required field
          table: 'domains',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
    })

    queryInterface.addConstraint('domainsPages', {
      fields: ['domains_id'],
      type: 'foreign key',
      name: 'custom__domains_id_constraint',
      references: { //Required field
        table: 'domains',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
  })

  queryInterface.addConstraint('domainsPages', {
    fields: ['pages_id'],
    type: 'foreign key',
    name: 'custom__pages_id_constraint',
    references: { //Required field
      table: 'pages',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('components', {
    fields: ['type_id'],
    type: 'foreign key',
    name: 'custom__components_type_id_constraint',
    references: { //Required field
      table: 'componentTypes',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('pagesComponents', {
    fields: ['pages_id'],
    type: 'foreign key',
    name: 'custom__pages_components__constraint',
    references: { //Required field
      table: 'pages',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('internalContentsPages', {
    fields: ['pages_id'],
    type: 'foreign key',
    name: 'custom__pages_internal_contents__constraint',
    references: { //Required field
      table: 'pages',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('internalContentsPages', {
    fields: ['internalContents_id'],
    type: 'foreign key',
    name: 'custom__internal_contents__constraint',
    references: { //Required field
      table: 'internalContents',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('externalContents', {
    fields: ['user_owner'],
    type: 'foreign key',
    name: 'custom__user_external_contents_constraint',
    references: { //Required field
      table: 'users',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('externalContentsPages', {
    fields: ['pages_id'],
    type: 'foreign key',
    name: 'custom_external_pages_constraint',
    references: { //Required field
      table: 'pages',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

  queryInterface.addConstraint('externalContentsPages', {
    fields: ['externalContents_id'],
    type: 'foreign key',
    name: 'custom_external_contents_constraint',
    references: { //Required field
      table: 'externalContents',
      field: 'id'
    },
    onDelete: 'no action',
    onUpdate: 'no action'
  })

},

  down: async (queryInterface, ) => {
    await queryInterface.removeConstraint('usersDomains', 'custom_users_user_domains');
    await queryInterface.removeConstraint('usersDomains', 'custom_components_pages_domains_constraint');
    await queryInterface.removeConstraint('domainsPages', 'custom__domains_id_constraint');
    await queryInterface.removeConstraint('domainsPages', 'custom__pages_id_constraint');
    await queryInterface.removeConstraint('components', 'custom__components_type_id_constraint');
    await queryInterface.removeConstraint('pagesComponents', 'custom__pages_components__constraint');
    await queryInterface.removeConstraint('internalContentsPages', 'custom__pages_internal_contents__constraint');
    await queryInterface.removeConstraint('internalContentsPages', 'custom__internal_contents__constraint');
    await queryInterface.removeConstraint('externalContents', 'custom__user_external_contents_constraint');
    await queryInterface.removeConstraint('externalContentsPages', 'custom_external_pages_constraint');
    await queryInterface.removeConstraint('externalContentsPages', 'custom_external_contents_constraint');
  }
};
