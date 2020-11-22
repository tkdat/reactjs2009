const crud = new function () {

    this.myArr = [
        { ID: '1', Full_Name: 'Nguyễn Văn Nam', Gender: 'Nam', Age: 12 },
        { ID: '2', Full_Name: 'Nguyễn Thị Nữ', Gender: 'Nữ', Age: 16 },
        { ID: '3', Full_Name: 'Nguyễn Ngọc Duy', Gender: 'Nữ', Age: 18 }
    ]

    this.category = ['Nam', 'Nữ']
    this.col = []

    this.createTable = function () {
        for (let i = 0; i < this.myArr.length; i++) {
            for (let key in this.myArr[i]) {
                if (this.col.indexOf(key) === -1) {
                    this.col.push(key)
                }
            }
        }

        const table = document.createElement('table')
        table.setAttribute('id', 'booksTable')
        let tr = table.insertRow(-1)

        for (let h = 0; h < this.col.length; h++) {
            const th = document.createElement('th')
            th.innerHTML = this.col[h].replace('_', ' ')
            tr.appendChild(th)
        }

        for (i = 0; i < this.myArr.length; i++) {
            tr = table.insertRow(-1)
            for (let j = 0; j < this.col.length; j++) {
                var tabCell = tr.insertCell(-1)
                tabCell.innerHTML = this.myArr[i][this.col[j]]
            }

            this.td = document.createElement('td')

            tr.appendChild(this.td)
            const lblCancel = document.createElement('label')

            lblCancel.innerHTML = '✖'
            lblCancel.setAttribute('onclick', 'crud.Cancel(this)')
            lblCancel.setAttribute('style', 'display:none;')
            lblCancel.setAttribute('title', 'Cancel')
            lblCancel.setAttribute('id', 'lbl' + i)
            this.td.appendChild(lblCancel)

            tr.appendChild(this.td);
            const btSave = document.createElement('input')

            btSave.setAttribute('type', 'button')
            btSave.setAttribute('value', 'Save')
            btSave.setAttribute('id', 'Save' + i)
            btSave.setAttribute('style', 'display:none;')
            btSave.setAttribute('onclick', 'crud.Save(this)')
            this.td.appendChild(btSave)

            tr.appendChild(this.td)
            const btUpdate = document.createElement('input')

            btUpdate.setAttribute('type', 'button')
            btUpdate.setAttribute('value', 'Update')
            btUpdate.setAttribute('id', 'Edit' + i)
            btUpdate.setAttribute('style', 'background-color:#44CCEB;')
            btUpdate.setAttribute('onclick', 'crud.Update(this)')
            this.td.appendChild(btUpdate)

            this.td = document.createElement('th')
            tr.appendChild(this.td)
            const btDelete = document.createElement('input')
            btDelete.setAttribute('type', 'button')
            btDelete.setAttribute('value', 'Delete')
            btDelete.setAttribute('style', 'background-color:#ED5650;')
            btDelete.setAttribute('onclick', 'crud.Delete(this)')
            this.td.appendChild(btDelete)
        }

        tr = table.insertRow(-1)

        for (let j = 0; j < this.col.length; j++) {
            const newCell = tr.insertCell(-1)
            if (j >= 1) {

                if (j == 2) {
                    const select = document.createElement('select')
                    select.innerHTML = '<option value=""></option>'
                    for (k = 0; k < this.category.length; k++) {
                        select.innerHTML = select.innerHTML +
                            '<option value="' + this.category[k] + '">' + this.category[k] + '</option>'
                    }
                    newCell.appendChild(select)
                }
                else {
                    const tBox = document.createElement('input')
                    tBox.setAttribute('type', 'text')
                    tBox.setAttribute('value', '')
                    newCell.appendChild(tBox)
                }
            }
        }

        this.td = document.createElement('td')
        tr.appendChild(this.td)
        const btNew = document.createElement('input')

        btNew.setAttribute('type', 'button')
        btNew.setAttribute('value', 'Create')
        btNew.setAttribute('id', 'New' + i)
        btNew.setAttribute('style', 'background-color:#207DD1;')
        btNew.setAttribute('onclick', 'crud.CreateNew(this)')
        this.td.appendChild(btNew)

        const div = document.getElementById('container')
        div.innerHTML = ''
        div.appendChild(table)
    }

    this.Cancel = function (oButton) {
        oButton.setAttribute('style', 'display:none; float:none;')
        const activeRow = oButton.parentNode.parentNode.rowIndex
        const btSave = document.getElementById('Save' + (activeRow - 1))
        btSave.setAttribute('style', 'display:none;')

        const btUpdate = document.getElementById('Edit' + (activeRow - 1))
        btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;')
        const tab = document.getElementById('booksTable').rows[activeRow]

        for (i = 0; i < this.col.length; i++) {
            const td = tab.getElementsByTagName("td")[i];
            td.innerHTML = this.myArr[(activeRow - 1)][this.col[i]];
        }
    }

    this.Update = function (oButton) {
        const activeRow = oButton.parentNode.parentNode.rowIndex;
        const tab = document.getElementById('booksTable').rows[activeRow];

        for (i = 1; i < 4; i++) {
            if (i == 2) {
                var td = tab.getElementsByTagName("td")[i]
                var ele = document.createElement('select')
                ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>'
                for (k = 0; k < this.category.length; k++) {
                    ele.innerHTML = ele.innerHTML +
                        '<option value="' + this.category[k] + '">' + this.category[k] + '</option>'
                }
                td.innerText = ''
                td.appendChild(ele)
            }
            else {
                var td = tab.getElementsByTagName("td")[i]
                var ele = document.createElement('input')
                ele.setAttribute('type', 'text')
                ele.setAttribute('value', td.innerText)
                td.innerText = ''
                td.appendChild(ele)
            }
        }

        const lblCancel = document.getElementById('lbl' + (activeRow - 1))
        lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;')

        const btSave = document.getElementById('Save' + (activeRow - 1))
        btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;')

        oButton.setAttribute('style', 'display:none;')
    }

    this.Delete = function (oButton) {
        const activeRow = oButton.parentNode.parentNode.rowIndex
        this.myArr.splice((activeRow - 1), 1)
        this.createTable()
    }

    this.Save = function (oButton) {
        const activeRow = oButton.parentNode.parentNode.rowIndex
        const tab = document.getElementById('booksTable').rows[activeRow]

        for (i = 1; i < this.col.length; i++) {
            var td = tab.getElementsByTagName("td")[i]
            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {
                this.myArr[(activeRow - 1)][this.col[i]] = td.childNodes[0].value
            }
        }
        this.createTable()
    }

    this.CreateNew = function (oButton) {
        const activeRow = oButton.parentNode.parentNode.rowIndex
        const tab = document.getElementById('booksTable').rows[activeRow]
        const obj = {}

        for (i = 1; i < this.col.length; i++) {
            const td = tab.getElementsByTagName("td")[i]
            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {
                const txtVal = td.childNodes[0].value
                if (txtVal != '') {
                    obj[this.col[i]] = txtVal.trim()
                }
                else {
                    obj = ''
                    alert('all fields are compulsory')
                    break
                }
            }
        }
        obj[this.col[0]] = this.myArr.length + 1

        if (Object.keys(obj).length > 0) {
            this.myArr.push(obj)
            this.createTable()
        }
    }
}
crud.createTable()