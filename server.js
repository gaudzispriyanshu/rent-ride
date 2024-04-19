import { createServer, Model } from "miragejs";
import carImage from './public/car1.png'


export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        
        environment,
        models: {
            cars: Model,
        },

        seeds(server) {
            server.create("car", {
                id: 0,
                make: "Ford",
                model: "Mustang",
                year: 2018,
                color: "Red",
                pricePerDay: 60,
                imageUrl: carImage,
                insuranceIncluded: false,
                description: "Experience the thrill of the open road with this iconic sports car.",
                hostId : "123",
            })                                                                                                                                                                                                                                                                                              
            server.create("car", {
                id: 1,
                make: "Toyota",
                model: "Corolla",
                year: 2019,
                color: "Silver",
                pricePerDay: 40,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "A reliable and fuel-efficient sedan for your everyday commute.",
                hostId : "123",
            })
            server.create("car", {
                id: 2,
                make: "Honda",
                model: "Civic",
                year: 2020,
                color: "Black",
                pricePerDay: 45,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "A stylish and versatile compact car, perfect for city driving.",
                hostId : "122",
            })
            server.create("car", {
                id: 3,
                make: "Ford",
                model: "Mustang",
                year: 2018,
                color: "Red",
                pricePerDay: 60,
                imageUrl: carImage,
                insuranceIncluded: false,
                description: "Experience the thrill of the open road with this iconic sports car.",
                hostId : "133",
            })
            server.create("car", {
                id: 4,
                make: "BMW",
                model: "3 Series",
                year: 2021,
                color: "Blue",
                pricePerDay: 70,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "Luxury meets performance in this elegant sedan from BMW.",
                hostId : "123",
            })
            server.create("car", {
                id: 5,
                make: "Audi",
                model: "A4",
                year: 2020,
                color: "White",
                pricePerDay: 65,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "Sleek and sophisticated, the Audi A4 offers premium comfort and style.",
                hostId : "113",
            })
            server.create("car", {
                id: 6,
                make: "Toyota",
                model: "Corolla",
                year: 2019,
                color: "Silver",
                pricePerDay: 40,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "A reliable and fuel-efficient sedan for your everyday commute.",
                hostId : "113",
            })
            server.create("car", {
                id: 7,
                make: "Honda",
                model: "Civic",
                year: 2020,
                color: "Black",
                pricePerDay: 45,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "A stylish and versatile compact car, perfect for city driving.",
                hostId : "113",
            })
            server.create("car", {
                id: 8,
                make: "Ford",
                model: "Mustang",
                year: 2018,
                color: "Red",
                pricePerDay: 60,
                imageUrl: carImage,
                insuranceIncluded: false,
                description: "Experience the thrill of the open road with this iconic sports car.",
                hostId : "113",
            })
            server.create("car", {
                id: 9,
                make: "BMW",
                model: "3 Series",
                year: 2021,
                color: "Blue",
                pricePerDay: 70,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "Luxury meets performance in this elegant sedan from BMW.",
                hostId : "113",
            })
            server.create("car", {
                id: 10,
                make: "Audi",
                model: "A4",
                year: 2020,
                color: "White",
                pricePerDay: 65,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "Sleek and sophisticated, the Audi A4 offers premium comfort and style.",
                hostId : "113",
            })
            server.create("car", {
                id: 11,
                make: "Toyota",
                model: "Corolla",
                year: 2019,
                color: "Silver",
                pricePerDay: 40,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "A reliable and fuel-efficient sedan for your everyday commute.",
                hostId : "113",
            })
            server.create("car", {
                id: 12,
                make: "Honda",
                model: "Civic",
                year: 2020,
                color: "Black",
                pricePerDay: 45,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "A stylish and versatile compact car, perfect for city driving.",
                hostId : "113",
            })
            server.create("car", {
                id: 13,
                make: "Ford",
                model: "Mustang",
                year: 2018,
                color: "Red",
                pricePerDay: 60,
                imageUrl: carImage,
                insuranceIncluded: false,
                description: "Experience the thrill of the open road with this iconic sports car.",
                hostId : "113",
            })
            server.create("car", {
                id: 14,
                make: "BMW",
                model: "3 Series",
                year: 2021,
                color: "Blue",
                pricePerDay: 70,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "Luxury meets performance in this elegant sedan from BMW.",
                hostId : "113",
            })
            server.create("car", {
                id: 15,
                make: "Audi",
                model: "A4",
                year: 2020,
                color: "White",
                pricePerDay: 65,
                imageUrl: carImage,
                insuranceIncluded: true,
                description: "Sleek and sophisticated, the Audi A4 offers premium comfort and style.",
                hostId : "113",
            })
        },

        routes() {
            this.namespace = "api"
            this.logging = false
            this.get("/cars", (schema, request) => {
                return schema.cars.all()
            });

            this.get("/cars/:id", (schema, request) => {
                const id = request.params.id
                return schema.cars.find(id)
            });

            this.get("/host/cars", (schema, request) => {
                return schema.cars.where({hostId : "123"})
            });

            this.get("/host/cars/:id", (schema, request) => {
                const id = request.params.id
                return schema.cars.find(id)
            });
        },

    })
    return server
}