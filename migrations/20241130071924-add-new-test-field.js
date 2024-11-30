module.exports = {
  async up(db, client) {
    // Add a new field 'test' to all documents with a default value of an empty array
    await db.collection('blogs').updateMany({}, { $set: { test: null } });
  },

  async down(db, client) {
    // Remove the 'test' field in case of a rollback
    await db.collection('blogs').updateMany({}, { $unset: { test: '' } });
  },
};
