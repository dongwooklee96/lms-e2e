describe('login', function () {

    it('login ali-edu', async function() {

        cy.visit("https://edu-cubelms.3dshot.cn/")

        for(let i = 0; i < 1000; i++) {
            // input id, password
            cy.wait(5000)
            cy.get('#lbInputText').type("dwlee@crscube.io")
            cy.get('#lbInputPwd2').type("cube1234")

            // click login button
            cy.get('.btn').click()

            cy.wait(5000)
            // click myinfo
            cy.get('.myinfo').click()

            // click logout-btn
            cy.get('.myinfo > .tooltip-box > .tooltip > .link > [href="#/DashBoard_Admin"]').click()

            // click yes
            cy.get('.btn-primary').click()
        }
    })
})



