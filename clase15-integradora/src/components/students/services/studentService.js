const studentService = require("../services/studentService");
const faker = require("faker");
const studentModel = require('../../../models/mongo/student');
class Student {

  async getStudents(paginator){
    try {
      return await studentModel.paginate({}, {...paginator})
    } catch (error) {
      console.log(`[Error] ~~ ${JSON.stringify(error)}`);
    }
  }
    async aggregation(){
      try {
        // Punto 1 (Del mejor a la peor calificacion)
        // const porCalificacion = await studentModel.aggregate([
        //   {
        //     $sort: {
        //       calificacion: -1
        //     }
        //   }
        // ])

        // Punto 2 (Obtener estudiantes agrupados por grupo)
        // const porGrupo = await studentModel.aggregate([
        //   {
        //     $group : {
        //       _id: '$grupo',
        //       estudiantes: { $push: '$$ROOT'}
        //     }
        //   }
        // ])

        // Punto 3 Promedio grupo 1B
        // const porGrupo1B = await studentModel.aggregate([
        //   {
        //     $match: {
        //       grupo: '1B'
        //     }
        //   },
        //   {
        //     $group : {
        //       _id: null,
        //       promedio: {
        //         $avg: '$calificacion'
        //       }
        //     }
        //   }
        // ])

        // // Punto 4 Promedio grupo 1a
        // const porGrupo1A = await studentModel.aggregate([
        //   {
        //     $match: {
        //       grupo: '1A'
        //     }
        //   },
        //   {
        //     $group : {
        //       _id: null,
        //       promedio: {
        //         $avg: '$calificacion'
        //       }
        //     }
        //   }
        // ])

        // Punto 5 Promedio General
        // const promedioGeneral = await studentModel.aggregate([
        //   {
        //     $group: {
        //       _id: null,
        //       promedio: { $avg: '$calificacion'}
        //     }
        //   }
        // ])

        // // Punto 6
        const hombresAVG = await studentModel.aggregate([
          {
            $match: {
              genero: 'H'
            }
          },
          {
            $group: {
              _id: null,
              promedio: { $avg: '$calificacion'}
            }
          }
        ])

        // // Punto 7
        const mujeresAVG = await studentModel.aggregate([
          {
            $match: {
              genero: 'M'
            }
          },
          {
            $group: {
              _id: null,
              promedio: { $avg: '$calificacion'}
            }
          },
          {
            $project: {
              _id: 0,
              promedio: 1
            }
          }
        ])

        // console.log(porCalificacion);
        return mujeresAVG;
      } catch (error) {
        console.log(`[Error] ~~ ${JSON.stringify(error)}`);
      }
    }


    async bulkCreate(cant = 10){
      try {
        let _arrStudents = [];
        for (let i = 0; i < cant; i++) {
          const student = {
            nombre: faker.name.findName(),
            apellido:faker.name.lastName(),
            email: faker.internet.email(),
            calificacion: faker.datatype.number({min:1, max: 10}),
            grupo: faker.random.arrayElement(['1A', '1B']),
            genero: faker.random.arrayElement(['H', 'M']),
          }
          _arrStudents.push(student);
        }
        let students = await studentModel.insertMany(_arrStudents);
        console.log(`New students ~~ `, students);
        return students;
      } catch (error) {
        console.log(`[Error] ~~ ${JSON.stringify(error)}`);
        return [];
      }
    }
}

module.exports = new Student();