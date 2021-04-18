'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('domains', { 
       id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          unique: true,
          primaryKey: true,
       },
       domain_name: {
         type: Sequelize.STRING,
         unique: true,
         allowNull: false
       },
       domain_schema: {
         type: Sequelize.JSON,
       },
       site_url: {
        type: Sequelize.STRING,
        unique: true,
       },
       site_url: {
        type: Sequelize.STRING,
        unique: true,
       },
       created_at: {
         type: Sequelize.DATE
       },
       updated_at: {
        type: Sequelize.DATE
      }
      },
      {
        timestamps: true,
      }
    );

    await queryInterface.createTable('pages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      page_components_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      page_config_components_schema: {
        type: Sequelize.JSON,
      },
      page_components_internal_content: {
        type: Sequelize.INTEGER,
      },
      page_components_external_content: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
       type: Sequelize.DATE
      }
    },
    {
      timestamps: true,
    });

    await queryInterface.createTable('components', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_schema: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      is_active:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }, 
      is_public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }, 
      analitics_source: {
        type: Sequelize.BOOLEAN,
      }, 
      config_schema: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      is_free: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      rent_price: {
        type: Sequelize.STRING,
      },
      rent_price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
       type: Sequelize.DATE
      }
    },
    {
      timestamps: true,
    });

    await queryInterface.createTable('componentTypes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      type_name: {
        type: Sequelize.STRING,
        unique: true,
      },
      type_schema: {
        type: Sequelize.JSON
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
       type: Sequelize.DATE
      }
    },
    {
      timestamps: true,
    });

    await queryInterface.createTable('internalContents', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      fields: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      text: {
        type: Sequelize.TEXT
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      content_meta: {
        type: Sequelize.JSON
      },
      user_owner: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
       type: Sequelize.DATE
      }
    },
    {
      timestamps: true,
    });

    await queryInterface.createTable('externalContents', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
      },
      config_schema: {
        type: Sequelize.JSON
      },
      external_content_type_id: {
        type: Sequelize.INTEGER,
      },
      user_owner: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
       type: Sequelize.DATE
      }
    },
    {
      timestamps: true,
    });

  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('domains');
     await queryInterface.dropTable('pages');
     await queryInterface.dropTable('components');
     await queryInterface.dropTable('componentTypes');
     await queryInterface.dropTable('internalContents');
     await queryInterface.dropTable('externalContents');
  }
};
