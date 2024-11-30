module.exports = {
  async up(db, client) {
    // Add a new field 'tags' to all documents with a default value of an empty array
    await db.collection('blogs').updateMany({}, { $set: { tags: [] } });
  },

  async down(db, client) {
    // Remove the 'tags' field in case of a rollback
    await db.collection('blogs').updateMany({}, { $unset: { tags: '' } });
  },
};
