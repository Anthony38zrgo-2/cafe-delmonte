export const QUANTITY_OPTIONS = [
  { value: '250gr', label: '250 gr' },
  { value: '500gr', label: '500 gr' },
  { value: '1kilo', label: '1 kilo' },
  { value: 'wholesale', label: 'Por mayor' },
]

export const GRIND_OPTIONS = [
  { value: 'coarse', label: 'Grueso', detail: 'Prensa Francesa' },
  { value: 'medium', label: 'Medio', detail: 'Moka' },
  { value: 'fine', label: 'Fino', detail: 'Cafetera Goteo' },
  { value: 'extra-fine', label: 'Extra Fino', detail: 'Expresso' },
]

export class Order {
  constructor(product) {
    this.product = product
    this.quantity = ''
    this.wholesaleQuantity = ''
    this.presentation = 'ground'
    this.grind = ''
    this.department = ''
    this.province = ''
    this.address = ''
  }

  get requiresWholesaleQuantity() {
    return this.quantity === 'wholesale'
  }

  get wholesaleQuantityIsValid() {
    return /^[1-9]\d{0,2}$/.test(this.wholesaleQuantity)
  }

  get isValid() {
    const hasValidQuantity = Boolean(this.quantity) && (!this.requiresWholesaleQuantity || this.wholesaleQuantityIsValid)
    const hasValidPresentation = this.presentation === 'whole' || (this.presentation === 'ground' && Boolean(this.grind))
    return hasValidQuantity && hasValidPresentation
  }

  setDepartment(department) {
    this.department = department
    this.province = ''
  }

  setPresentation(presentation) {
    this.presentation = presentation
    if (presentation === 'whole') this.grind = ''
  }

  setWholesaleQuantity(value) {
    this.wholesaleQuantity = String(value)
  }

  buildMessage() {
    if (!this.isValid) return ''

    const quantityLabel = this.requiresWholesaleQuantity
      ? `${this.wholesaleQuantity} kilos (por mayor)`
      : QUANTITY_OPTIONS.find(({ value }) => value === this.quantity)?.label
    const presentationLabel = this.presentation === 'whole'
      ? 'Grano entero'
      : `Molido ${GRIND_OPTIONS.find(({ value }) => value === this.grind)?.label} — ${GRIND_OPTIONS.find(({ value }) => value === this.grind)?.detail}`
    const lines = [
      'Hola, quisiera realizar el siguiente pedido en Café Delmonte:',
      `• Variedad: ${this.product.name}`,
      `• Cantidad: ${quantityLabel}`,
      `• Presentación: ${presentationLabel}`,
    ]

    if (this.department) lines.push(`• Departamento: ${this.department}`)
    if (this.province) lines.push(`• Provincia: ${this.province}`)
    if (this.address.trim()) lines.push(`• Dirección: ${this.address.trim()}`)
    return lines.join('\n')
  }
}
