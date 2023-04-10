/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'mow the lawn',
      created_at: new Date(Date.now()),
      is_complete: true,
    },
    {
      id: 2,
      task: 'make ice coffee',
      created_at: new Date(Date.now()),
      is_complete: false,
    },
    {
      id: 3,
      task: 'listen to new playlist',
      created_at: new Date(Date.now()),
      is_complete: false,
    },
  ])
}
