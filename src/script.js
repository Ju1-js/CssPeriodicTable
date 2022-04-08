// ¯\_(ツ)_/¯

const pureElementCardTemplate = document.querySelector("[data-pureElement-template]")
const pureElementCardContainer = document.querySelector("[data-pureElement-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchFilter = document.querySelector("[data-search-filter]")

let pureElements = []

let lastSearchInput = ""

searchInput.addEventListener("input", e => {
    const _value = e.target.value.toLowerCase().replace(/\s+/g, ' ').trim()
    lastSearchInput = _value
    searchPureElements(_value)
})

searchFilter.addEventListener("change", function() {
    searchPureElements(lastSearchInput)
})

function getFilter(_pureElement, _value) {
    const filter = searchFilter.value
    let _isVisible = false;
    switch (String(filter)) {
        case "name":
            _isVisible = _pureElement.name.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "symbol":
            _isVisible = _pureElement.symbol.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "appearance":
            _isVisible = _pureElement.appearance.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "category":
            _isVisible = _pureElement.category.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "phase":
            _isVisible = _pureElement.phase.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "density":
            _isVisible = _pureElement.density.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "atomic_mass":
            _isVisible = _pureElement.atomic_mass.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "boil":
            _isVisible = _pureElement.boil.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "melt":
            _isVisible = _pureElement.melt.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "molar_heat":
            _isVisible = _pureElement.molar_heat.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "discovered_by":
            _isVisible = _pureElement.discovered_by.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "named_by":
            _isVisible = _pureElement.named_by.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "atomic_number":
            _isVisible = _pureElement.atomic_number.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "summary":
            _isVisible = _pureElement.summary.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "period":
            _isVisible = _pureElement.period.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "xpos":
            _isVisible = _pureElement.xpos.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "ypos":
            _isVisible = _pureElement.ypos.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "electron_configuration":
            _isVisible = _pureElement.electron_configuration.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "electron_configuration_semantic":
            _isVisible = _pureElement.electron_configuration_semantic.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "electron_affinity":
            _isVisible = _pureElement.electron_affinity.toString().toLowerCase().replace(/\s+/g, ' ').trim().includes(_value)
            break
        case "electronegativity_pauling":
            _isVisible = _pureElement.electronegativity_pauling.toString().replace(/\s+/g, ' ').trim().toLowerCase().includes(_value)
            break
        case "ionization_energies":
            _isVisible = _pureElement.ionization_energies.toString().replace(/\s+/g, ' ').trim().toLowerCase().includes(_value)
            break
        case "cpkhex":
            _isVisible = _pureElement.cpkhex.toString().replace(/\s+/g, ' ').trim().toLowerCase().includes(_value)
            break
    }
    showRightData(filter, _pureElement)
    return _isVisible
}

function searchPureElements(_value) {
    pureElements.forEach(_pureElement => {
        const isVisible = getFilter(_pureElement, _value)
        _pureElement.element.classList.toggle("hide", !isVisible)
    })
}

function showRightData(_filter, _pureElement) {
    // Show only the applicable data ex. Searching name -> show name, searching density -> show density 
    for (let i = 0; i < _pureElement.element.children[0].children[1].children.length; i++) {
        const child = (_pureElement.element.children[0].children[1].children[i])
            //console.log(_filter)
        if (child.classList.contains(_filter) && child.classList.contains("hide")) {
            child.classList.remove("hide")
        } else if (!child.classList.contains(_filter) && !child.classList.contains("hide")) {
            child.classList.add("hide")
        }
    }
}

// https://jsonplaceholder.typicode.com/users
fetch("src/elements.json")
    .then(res => res.json())
    .then(data => {
        pureElements = data.map(_pureElement => {
            const card = pureElementCardTemplate.content.cloneNode(true).children[0]
            const name = card.querySelector("[data-name]")
            const name2 = card.querySelector("[data-name2]")
            const symbol = card.querySelector("[data-symbol]")
            const appearance = card.querySelector("[data-appearance]")
            const category = card.querySelector("[data-category]")
            const phase = card.querySelector("[data-phase]")
            const density = card.querySelector("[data-density]")
            const atomic_mass = card.querySelector("[data-atomic_mass]")
            const boil = card.querySelector("[data-boil]")
            const melt = card.querySelector("[data-melt]")
            const molar_heat = card.querySelector("[data-molar_heat]")
            const discovered_by = card.querySelector("[data-discovered_by]")
            const named_by = card.querySelector("[data-named_by]")
            const atomic_number = card.querySelector("[data-atomic_number]")
            const summary = card.querySelector("[data-summary]")
            const period = card.querySelector("[data-period]")
            const xpos = card.querySelector("[data-xpos]")
            const ypos = card.querySelector("[data-ypos]")
            const electron_configuration = card.querySelector("[data-electron_configuration]")
            const electron_configuration_semantic = card.querySelector("[data-electron_configuration_semantic]")
            const electron_affinity = card.querySelector("[data-electron_affinity]")
            const electronegativity_pauling = card.querySelector("[data-electronegativity_pauling]")
            const ionization_energies = card.querySelector("[data-ionization_energies]")
            const cpkhex = card.querySelector("[data-cpkhex]")

            if (_pureElement.category.includes("alkali metal")) {
                card.classList.add("alkali-metal")
            }
            if (_pureElement.category.includes("alkaline earth metal")) {
                card.classList.add("alkaline-earth-metal")
            }
            if (_pureElement.category.includes("lanthanide")) {
                card.classList.add("lanthanide")
            }
            if (_pureElement.category.includes("actinide")) {
                card.classList.add("actinoid")
            }
            if (_pureElement.category.includes("transition metal")) {
                card.classList.add("transition-metal")
            }
            if (_pureElement.category.includes("post-transition metal")) {
                card.classList.add("post-transition-metal")
            }
            if (_pureElement.category.includes("metalloid")) {
                card.classList.add("metalloid")
            }
            if (_pureElement.category.includes("nonmetal")) {
                card.classList.add("other-nonmetal")
            }
            if (_pureElement.category.includes("noble gas")) {
                card.classList.add("noble-gas")
            }
            if (_pureElement.category.includes("unknown")) {
                card.classList.add("unknown")
            }

            if (_pureElement.name == null) {
                _pureElement.name = ""
            }
            if (_pureElement.symbol == null) {
                _pureElement.symbol = ""
            }
            if (_pureElement.appearance == null) {
                _pureElement.appearance = ""
            }
            if (_pureElement.category == null) {
                _pureElement.category = ""
            }
            if (_pureElement.phase == null) {
                _pureElement.phase = ""
            }
            if (_pureElement.density == null) {
                _pureElement.density = ""
            }
            if (_pureElement.atomic_mass == null) {
                _pureElement.atomic_mass = ""
            }
            if (_pureElement.boil == null) {
                _pureElement.boil = ""
            }
            if (_pureElement.melt == null) {
                _pureElement.melt = ""
            }
            if (_pureElement.molar_heat == null) {
                _pureElement.molar_heat = ""
            }
            if (_pureElement.discovered_by == null) {
                _pureElement.discovered_by = ""
            }
            if (_pureElement.named_by == null) {
                _pureElement.named_by = ""
            }
            if (_pureElement.atomic_number == null) {
                _pureElement.atomic_number = ""
            }
            if (_pureElement.summary == null) {
                _pureElement.summary = ""
            }
            if (_pureElement.period == null) {
                _pureElement.period = ""
            }
            if (_pureElement.xpos == null) {
                _pureElement.xpos = ""
            }
            if (_pureElement.ypos == null) {
                _pureElement.ypos = ""
            }
            if (_pureElement.electron_configuration == null) {
                _pureElement.electron_configuration = ""
            }
            if (_pureElement.electron_configuration_semantic == null) {
                _pureElement.electron_configuration_semantic = ""
            }
            if (_pureElement.electron_affinity == null) {
                _pureElement.electron_affinity = ""
            }
            if (_pureElement.electronegativity_pauling == null) {
                _pureElement.electronegativity_pauling = ""
            }
            if (_pureElement.ionization_energies == null) {
                _pureElement.ionization_energies = ""
            }
            if (_pureElement.cpkhex == null) {
                _pureElement.cpkhex = ""
            }

            name.textContent = _pureElement.name
            name.title = _pureElement.name
            name2.textContent = _pureElement.name
            name2.title = _pureElement.name
            symbol.textContent = _pureElement.symbol
            symbol.title = _pureElement.symbol
            appearance.textContent = _pureElement.appearance
            appearance.title = _pureElement.appearance
            category.textContent = _pureElement.category
            category.title = _pureElement.category
            phase.textContent = _pureElement.phase
            phase.title = _pureElement.phase
            density.textContent = _pureElement.density
            density.title = _pureElement.density
            atomic_mass.textContent = _pureElement.atomic_mass
            atomic_mass.title = _pureElement.atomic_mass
            boil.textContent = _pureElement.boil
            boil.title = _pureElement.boil
            melt.textContent = _pureElement.melt
            melt.title = _pureElement.melt
            molar_heat.textContent = _pureElement.molar_heat
            molar_heat.title = _pureElement.molar_heat
            discovered_by.textContent = _pureElement.discovered_by
            discovered_by.title = _pureElement.discovered_by
            named_by.textContent = _pureElement.named_by
            named_by.title = _pureElement.named_by
            atomic_number.textContent = _pureElement.atomic_number
            atomic_number.title = _pureElement.atomic_number
            summary.textContent = _pureElement.summary
            summary.title = _pureElement.summary
            period.textContent = _pureElement.period
            period.title = _pureElement.period
            xpos.textContent = _pureElement.xpos
            xpos.title = _pureElement.xpos
            ypos.textContent = _pureElement.ypos
            ypos.title = _pureElement.ypos
            electron_configuration.textContent = _pureElement.electron_configuration
            electron_configuration.title = _pureElement.electron_configuration
            electron_configuration_semantic.textContent = _pureElement.electron_configuration_semantic
            electron_configuration_semantic.title = _pureElement.electron_configuration_semantic
            electron_affinity.textContent = _pureElement.electron_affinity
            electron_affinity.title = _pureElement.electron_affinity
            electronegativity_pauling.textContent = _pureElement.electronegativity_pauling
            electronegativity_pauling.title = _pureElement.electronegativity_pauling
            ionization_energies.textContent = _pureElement.ionization_energies
            ionization_energies.title = _pureElement.ionization_energies
            cpkhex.textContent = _pureElement.cpkhex
            cpkhex.title = _pureElement.cpkhex

            pureElementCardContainer.append(card)

            return {
                element: card,
                name: _pureElement.name,
                symbol: _pureElement.symbol,
                appearance: _pureElement.appearance,
                category: _pureElement.category,
                phase: _pureElement.phase,
                density: _pureElement.density,
                atomic_mass: _pureElement.atomic_mass,
                boil: _pureElement.boil,
                melt: _pureElement.melt,
                molar_heat: _pureElement.molar_heat,
                discovered_by: _pureElement.discovered_by,
                named_by: _pureElement.named_by,
                atomic_number: _pureElement.number,
                summary: _pureElement.summary,
                period: _pureElement.period,
                xpos: _pureElement.xpos,
                ypos: _pureElement.ypos,
                electron_configuration: _pureElement.electron_configuration,
                electron_configuration_semantic: _pureElement.electron_configuration_semantic,
                electron_affinity: _pureElement.electron_affinity,
                electronegativity_pauling: _pureElement.electronegativity_pauling,
                ionization_energies: _pureElement.ionization_energies,
                cpkhex: _pureElement.cpkhex
            }
        })
    })