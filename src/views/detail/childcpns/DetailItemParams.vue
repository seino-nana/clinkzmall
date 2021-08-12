<template>
  <div class="itemparams" v-if="Object.keys(itemParams).length !== 0">
    <!-- 尺寸相关 -->
    <div class="size">
      <div v-for="item in itemParams.rule.tables[0]" :key="item.index">
        <div class="size-table row">
          <span v-for="items in item" :key="items.index" class="size-item">{{items}}</span>
        </div>
      </div>
    </div>
    <!-- 产品参数 -->
    <div class="info">
      <div v-for="item in itemParams.info.set" :key="item.index">
        <div class="info-item row">
          <div class="key">{{item.key}}</div>
          <div class="value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailItemParams',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.itemparams {
  font-size: 15px;
  padding: 20px 15px;
  border-bottom: 6px solid #f2f2f2;
}

.row {
  display: flex;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #f2f2f2;
}
.size-item {
  flex: 1;
}
.key {
  width: 80px;
}
.value {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-high-text);
}
</style>