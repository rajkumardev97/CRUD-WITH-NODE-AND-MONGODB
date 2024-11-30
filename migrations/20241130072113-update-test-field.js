module.exports = {
  async up(db, client) {
    // Rename 'test' to 'testupdate'
    await db.collection('blogs').updateMany({}, { $rename: { test: 'testupdate' } });
  },

  async down(db, client) {
    // Rollback: Rename 'testupdate' back to 'test'
    await db.collection('blogs').updateMany({}, { $rename: { testupdate: 'test' } });
  },
};
