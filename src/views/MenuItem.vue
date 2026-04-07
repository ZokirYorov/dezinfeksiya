<template>
  <div class="menu-item" @click.stop="toggle">
    <div class="menu-item__row" :class="{ 'menu-item__row--active': isOpen }">
      <span>{{ item.name }}</span>
      <svg
          v-if="item.children?.length"
          :style="{ transform: isOpen ? 'rotate(90deg)' : 'none' }"
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
      <span v-else class="menu-item__badge">✓</span>
    </div>

    <transition name="slide">
      <div v-if="isOpen && item.children?.length" class="menu-item__children">
        <MenuItem
            v-for="child in item.children"
            :key="child.name"
            :item="child"
            :depth="depth + 1"
            @select="$emit('select', $event)"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface MenuNode {
  name: string
  children?: MenuNode[]
}

const props = defineProps<{
  item: MenuNode
  depth?: number
}>()

const emit = defineEmits<{
  select: [item: MenuNode]
}>()

const isOpen = ref(false)

const toggle = () => {
  if (props.item.children?.length) {
    isOpen.value = !isOpen.value
  } else {
    emit('select', props.item)
  }
}
</script>

<style scoped>
.menu-item { width: 100%; }

.menu-item__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
  color: #374151;
  transition: background 0.15s;
  gap: 8px;
}
.menu-item__row:hover { background: #F3F4F6; }
.menu-item__row--active {
  background: #EEF2FF;
  color: #4F46E5;
  font-weight: 600;
}
.menu-item__row svg { transition: transform 0.2s; flex-shrink: 0; }

.menu-item__badge {
  font-size: 11px;
  background: #D1FAE5;
  color: #065F46;
  padding: 2px 8px;
  border-radius: 20px;
}

.menu-item__children {
  margin-left: 12px;
  padding-left: 12px;
  border-left: 2px solid #E5E7EB;
  margin-top: 2px;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>