describe('login', function () {

    it('login ali-edu', function() {

        cy.visit("https://edu-cubelms.crscube.cn/")

        for(let i = 0; i < 1000; i++) {
            // input id, password
            cy.get('#lbInputText').type("dwlee@crscube.io")
            cy.get('#lbInputPwd2').type("cube1234")

            // click login button
            cy.get('.btn').click()

            // click myinfo
            cy.get('.myinfo').click()

            // click logout-btn
            cy.get('.myinfo > .tooltip-box > .tooltip > .link > [href="#/DashBoard_Admin"]').click()

            // click yes
            cy.get('.btn-primary').click()
        }
    })
})
