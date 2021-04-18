'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('pages', 'page_components_ids');

    await queryInterface.createTable('pagesComponents', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      pages_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      component_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
       type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('pagesComponents', {
        fields: ['pages_id'],
        type: 'foreign key',
        name: 'custom_pages_components_constraint',
        references: { //Required field
          table: 'pages',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
    })).then(() => queryInterface.addConstraint('pagesComponents', {
        fields: ['component_id'],
        type: 'foreign key',
        name: 'custom_components_pages_constraint',
        references: { //Required field
          table: 'components',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
    }))

    // await queryInterface.addColumn('domains', 'domain_pages', Sequelize.INTEGER)
    //   .then(() => queryInterface.addConstraint('domains', {
    //     fields: ['domain_pages'],
    //     type: 'foreign key',
    //     name: 'custom_domains_constraint_name',
    //     references: { //Required field
    //       table: 'pages',
    //       field: 'id'
    //     },
    //     onDelete: 'no action',
    //     onUpdate: 'no action'
    //   }));

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
