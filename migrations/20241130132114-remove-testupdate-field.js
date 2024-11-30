module.exports = {
  async up(db, client) {
    // Remove the 'testupdate' field
    await db.collection('blogs').updateMany({}, { $unset: { testupdate: '' } });
  },

  async down(db, client) {
    // Rollback: Re-add the 'testupdate' field (you'll need to set a default value)
    await db.collection('blogs').updateMany({}, { $set: { testupdate: 'testupdate' } });
  },
};
