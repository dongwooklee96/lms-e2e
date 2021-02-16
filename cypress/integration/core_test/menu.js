describe('Menu 접속', function () {

    beforeEach(() => {
        cy.visit("https://edu-cubelms.3dshot.cn/")
        // cy.login = function () {
        //     // input id, password
        //     cy.wait(5000)
        //     cy.get('#lbInputText').type("dwlee@crscube.io")
        //     cy.get('#lbInputPwd2').type("cube1234")
        //
        //     // click login button
        //     cy.get('.btn').click()
        //     cy.wait(5000)
        // }
        // cy.login()
    })

    it('HOME', async function() {
        // click menu
        cy.get('.dashboard-view > :nth-child(1)').click()
        // click TRAINEE
        cy.get('[name="TRAINEE"]').click()
        // click menu
        cy.get('.dashboard-view > :nth-child(1)').click()
        // click CONTENTS MANAGER
        cy.get('[name="CONTENTS MANAGER"]').click()
        // click menu
        cy.get('.dashboard-view > :nth-child(1)').click()
        // click ADMIN
        cy.get('[name="ADMIN"]').click()

        // click NOTICE
        cy.get('li.on > ul > :nth-child(2) > .off > span').click()
    })

    it('TRAINING', async function() {
        // click TRAINING TAB
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > span').click()

        // click TO DO LIST
        cy.get('.tab-wrap > ul > :nth-child(1) > a').click()

        // click OPTIONAL
        cy.get('.tab-wrap > ul > :nth-child(2) > a').click()

        // click ALL
        cy.get('.tab-wrap > ul > :nth-child(3) > a').click()

        //click ALL TRAINING
        cy.get('li.on > ul > :nth-child(2) > .off > span').click()
    })

    it('USER MANAGEMENT', async function() {
        // click USER MANAGEMENT TAB
        cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > span').click()

        // click GROUP
        cy.get('.on > span').click()

        // click JOB TITLE
        cy.get('li.on > ul > :nth-child(2) > .off > span').click()

        // click USER
        cy.get('li.on > ul > :nth-child(3) > .off > span').click()
    })

    it('CONTENTS MANAGEMENT', async function() {
        // click CONTENTS MANAGEMENT
        cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > span').click()
        // click CATEGORY
        cy.get('.on > span').click()
        // click LECTURE
        cy.get('li.on > ul > :nth-child(2) > .off > span').click()
        // click QUIZ
        cy.get('li.on > ul > :nth-child(3) > .off').click()
        // click COURSE
        cy.get(':nth-child(4) > .off > span').click()
    })

    it('LEARNING PROGRESS', async function() {
        cy.get(':nth-child(5) > :nth-child(1) > span').click()
        cy.get('.on > span').click()
        cy.get('li.on > ul > :nth-child(2) > .off > span').click()
    })

    it('SYSTEM MANAGEMENT', async function() {
        cy.get(':nth-child(6) > :nth-child(1) > span').click()
    })

    it('COMPANY MANAGEMENT', async function() {
        cy.get(':nth-child(7) > :nth-child(1) > span').click()
    })
})