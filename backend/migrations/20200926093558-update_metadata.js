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
      queryInterface.addColumn('Metadata', 'taskId', {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      queryInterface.addConstraint('Metadata', {
        fields: ['taskId'],
        type: 'foreign key',
        name: 'fkey_metadata_task',
        references: {
          table: 'Tasks',
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
    await queryInterface.removeColumn('Metadata', 'taskId');
  }
};
