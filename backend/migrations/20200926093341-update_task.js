'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn('Tasks', 'listId', {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.addConstraint('Tasks', {
        fields: ['listId'],
        type: 'foreign key',
        name: 'fkey_task_list',
        references: {
          table: 'Lists',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Tasks', 'listId');
  }
};
