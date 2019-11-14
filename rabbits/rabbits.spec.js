const db = require('../data/db-config');

const { add, remove } = require('../rabbits/rabbits-model');

const testRabbit = {
  name: 'Cromwell',
  breed: 'Flemish Giant'
}

const testRabbits = [
  testRabbit,
  {
    name: "Thumper",
    breed: "Field Rabbit"
  }
]

describe('rabbits-model', () => {
  describe('insert', () => {
    beforeEach(async () => {
      await db('rabbits').truncate();
    });

    it('should create an object on the DB', async () => {
      await add(testRabbit)

      const rabbits = await db('rabbits');

      expect(typeof rabbits[0]).toBe('object');
    })

    it('should insert rabbit name into name column', async () => {
      await add(testRabbit);

      const rabbits = await db('rabbits');

      expect(rabbits[0]).toHaveProperty('name', 'Cromwell');
    });

    it('should insert rabbit breed into breed column', async () => {
      await add(testRabbit);

      const rabbits = await db('rabbits');

      expect(rabbits[0].breed).toBe(testRabbit.breed);

    });
  });

  describe('remove', () => {
    it('should remove rabbit object from db', async () => {
      beforeEach(async () => {
        await db('rabbits').truncate();
        testRabbits.forEach(rabbit => {
          db('rabbits')
          add(rabbit)
        })
      })
    })

    it('should leave one rabbit entry remaining', async () => {
      await remove(1);

      const rabbits = await db('rabbits');

      expect(rabbits).toHaveLength(1);
    })
  })
  it('remaining rabbit should have id equal to 2', async () => {
    await remove(1);

    const rabbits = await db('rabbits');

    expect(rabbits[0]).toHaveProperty('id', 2)
  })
});