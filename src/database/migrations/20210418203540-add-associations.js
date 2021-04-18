'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('domains', 'domain_pages', Sequelize.INTEGER)
      .then(() => queryInterface.addConstraint('domains', {
        fields: ['domain_pages'],
        type: 'foreign key',
        name: 'custom_Domains_constraint_name',
        references: { //Required field
          table: 'pages',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      }));

    await queryInterface.addConstraint('pages', {
      fields: ['page_components_ids'],
      type: 'foreign key',
      name: 'custom_pages_constraint_name',
      references: { //Required field
        table: 'components',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

    await queryInterface.addConstraint('pages', {
      fields: ['page_components_internal_content'],
      type: 'foreign key',
      name: 'custom_pages_internal_constraint_name',
      references: { //Required field
        table: 'internalContents',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

    await queryInterface.addConstraint('pages', {
      fields: ['page_components_external_content'],
      type: 'foreign key',
      name: 'custom_pages_external_constraint_name',
      references: { //Required field
        table: 'externalContents',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

    await queryInterface.addConstraint('components', {
      fields: ['type_id'],
      type: 'foreign key',
      name: 'custom_components_constraint',
      references: { //Required field
        table: 'componentTypes',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

    await queryInterface.addConstraint('internalContents', {
      fields: ['user_owner'],
      type: 'foreign key',
      name: 'custom_internalContents_constraint',
      references: { //Required field
        table: 'users',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

    await queryInterface.addConstraint('externalContents', {
      fields: ['user_owner'],
      type: 'foreign key',
      name: 'custom_externalContents_constraint',
      references: { //Required field
        table: 'users',
        field: 'id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('domains', 'custom_Domains_constraint_name');
    await queryInterface.removeConstraint('pages', 'custom_pages_constraint_name');
    await queryInterface.removeConstraint('pages', 'custom_pages_internal_constraint_name');
    await queryInterface.removeConstraint('pages', 'page_components_external_content');
    await queryInterface.removeConstraint('components', 'page_components_external_content');
    await queryInterface.removeConstraint('internalContents', 'custom_internalContents_constraint');
    await queryInterface.removeConstraint('externalContents', 'custom_externalContents_constraint');

  }
};
