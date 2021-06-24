class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
        this.pets = 0
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity <= this.currentWorkload) {
            throw new Error(`Sorry, we are not able to accept more patients!`);
        }
        kind = kind.toLowerCase();
        let currClient = this.clients.filter(e => e.ownerName === ownerName);
        if (currClient.length === 0) {
            this.clients.push({ownerName, pets: [{petName, kind, procedures}]});
        } else {
            let currPet = currClient[0].pets.filter(e => e.petName === petName);
            if (currPet.length > 0 && currPet[0].procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currPet[0].procedures.join(', ')}.`);
            }

            if (currPet.length > 0) {
                currPet[0].procedures = procedures;
            } else {
                currClient[0].pets.push({petName, kind, procedures})
            }
        }
        currClient = this.clients.filter(e => e.ownerName === ownerName);
        let currPet = currClient[0].pets.filter(e => e.petName === petName);
        if (typeof currPet[0].procedures !== 'undefined') {
            this.currentWorkload++;
        }
        return `Welcome ${petName}!`
    }


    onLeaving(ownerName, petName) {
        let currClient = this.clients.filter(e => e.ownerName === ownerName);
        if (currClient.length === 0) {
            throw new Error('Sorry, there is no such client!');
        }
        let currPet = currClient[0].pets.filter(e => e.petName === petName);
        if (currPet.length === 0 || currPet[0].procedures.length === 0) {
            throw  Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.totalProfit += Number(currPet[0].procedures.length) * 500.00;
        this.currentWorkload = this.currentWorkload - 1;
        currPet[0].procedures = [];
        return `Goodbye ${petName}. Stay safe!`
    };

    toString() {
        let sortOwners = (a, b) => a.ownerName.localeCompare(b.ownerName);
        let sortPets = (a, b) => a.petName.localeCompare(b.petName);
        let percentage = Math.floor(this.currentWorkload / this.capacity * 100)
        let profit = this.totalProfit.toFixed(2);
        this.clients.sort(sortOwners);
        this.clients.forEach(e => e.pets.sort(sortPets));
        let result = []
        this.clients.forEach(e => {
            result.push(`${e.ownerName} with:`)
            e.pets.forEach(p => {
                result.push(`---${p.petName} - a ${p.kind} that needs: ${p.procedures.join(', ')}`)
            })
        })
        result.unshift(`${this.clinicName} is ${percentage}% busy today!`, `Total profit: ${profit}$`)
        return result.join('\n');
    }
}



` `

