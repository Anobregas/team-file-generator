const { default: inquirer } = require("inquirer")
const index = require("../index")


    describe("promptManager returns a string", () => {
        test("should use inquirer to prompt a string", () => {
            const { name, id, email } = index.promptManager(
                "john",
                "123",
                "asdf"
            )

            expect(name).toEqual("john");
            expect(id).toEqual("123");
            expect(email).toEqual("asdf")
        })
    })
