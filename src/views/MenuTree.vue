<template>
  <div class="menu-tree">
    <div class="menu-tree__header">
      <!-- Breadcrumb -->
      <div class="breadcrumb" v-if="selected">
        <span>Tanlangan:</span>
        <strong>{{ selected.name }}</strong>
      </div>
    </div>

    <div class="menu-tree__body">
      <MenuItem
          v-for="item in menuData"
          :key="item.name"
          :item="item"
          :depth="0"
          @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MenuItem from './MenuItem.vue'

interface MenuNode {
  name: string
  children?: MenuNode[]
}

const selected = ref<MenuNode | null>(null)

const onSelect = (item: MenuNode) => {
  selected.value = item
}

const menuData = computed<MenuNode[]>(() => [
  {
    name: 'Web',
    children: [
      {
        name: 'Frontend',
        children: [
          { name: 'Vue' },
          { name: 'React' },
          { name: 'Angular'}
        ]
      },
      { name: 'Backend' }
    ]
  },
  {
    name: 'Design',
    children: [
      {
        name: 'UI',
        children: [
          { name: 'Figma' },
          { name: 'Adobe XD' }
        ]
      }
    ]
  }
])
</script>

<style scoped>
.menu-tree {
  width: 280px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
}
.menu-tree__header {
  padding: 12px 14px;
  border-bottom: 1px solid #F3F4F6;
  min-height: 44px;
}
.menu-tree__body { padding: 8px; }

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #6B7280;
}
.breadcrumb strong { color: #4F46E5; }
</style>