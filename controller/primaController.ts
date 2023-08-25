import PrismaC from "../configs/prisma"



export async function storeMusic(arch: any) {
  const Music = await PrismaC.getPrisma().music.create({
    data: {
     title: 'NJ',
     binary: arch,
     publisher: {
      connectOrCreate: {
        where: {
          email: 'wpaixao@teste.com.br',
        },
        create: {
          email: 'wpaixao@teste.com.br',
          name: 'wes',
        },
      },
    },

    },
  })
}


export async function getMusic(id: any) {
  const msc = await PrismaC.getPrisma().music.findUnique({
    where: {
      id: 1
    },
  })

  return msc
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
