import { defineStore } from 'pinia'

export const useCursorStore = defineStore('cursorStore', () => {
    const text = ref<string | null>(null)

    function setText(newText: string | null) {
        text.value = newText
    }

    function clearText() {
        text.value = null
    }

    return { text, setText, clearText }
})