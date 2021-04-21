'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.addColumn('users', 'users_domain', {
      type: Sequelize.INTEGER,
      }).then(() => queryInterface.addConstraint('users', {
        fields: ['users_domain'],
        type: 'foreign key',
        name: 'users_pages_domains',
        references: { //Required field
          table: 'domains',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
    }))
    await queryInterface.addColumn('users', 'created_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    })
    await queryInterface.addColumn('users', 'updated_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    })
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
