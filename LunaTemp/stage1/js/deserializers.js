var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointSpring' )
  var i1573 = data
  i1572.spring = i1573[0]
  i1572.damper = i1573[1]
  i1572.targetPosition = i1573[2]
  return i1572
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.JointMotor' )
  var i1575 = data
  i1574.m_TargetVelocity = i1575[0]
  i1574.m_Force = i1575[1]
  i1574.m_FreeSpin = i1575[2]
  return i1574
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.JointLimits' )
  var i1577 = data
  i1576.m_Min = i1577[0]
  i1576.m_Max = i1577[1]
  i1576.m_Bounciness = i1577[2]
  i1576.m_BounceMinVelocity = i1577[3]
  i1576.m_ContactDistance = i1577[4]
  i1576.minBounce = i1577[5]
  i1576.maxBounce = i1577[6]
  return i1576
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.JointDrive' )
  var i1579 = data
  i1578.m_PositionSpring = i1579[0]
  i1578.m_PositionDamper = i1579[1]
  i1578.m_MaximumForce = i1579[2]
  i1578.m_UseAcceleration = i1579[3]
  return i1578
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1581 = data
  i1580.m_Spring = i1581[0]
  i1580.m_Damper = i1581[1]
  return i1580
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1583 = data
  i1582.m_Limit = i1583[0]
  i1582.m_Bounciness = i1583[1]
  i1582.m_ContactDistance = i1583[2]
  return i1582
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1585 = data
  i1584.m_ExtremumSlip = i1585[0]
  i1584.m_ExtremumValue = i1585[1]
  i1584.m_AsymptoteSlip = i1585[2]
  i1584.m_AsymptoteValue = i1585[3]
  i1584.m_Stiffness = i1585[4]
  return i1584
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1587 = data
  i1586.m_LowerAngle = i1587[0]
  i1586.m_UpperAngle = i1587[1]
  return i1586
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1589 = data
  i1588.m_MotorSpeed = i1589[0]
  i1588.m_MaximumMotorTorque = i1589[1]
  return i1588
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1591 = data
  i1590.m_DampingRatio = i1591[0]
  i1590.m_Frequency = i1591[1]
  i1590.m_Angle = i1591[2]
  return i1590
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1593 = data
  i1592.m_LowerTranslation = i1593[0]
  i1592.m_UpperTranslation = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.halfPrecision = !!i1595[1]
  i1594.useSimplification = !!i1595[2]
  i1594.useUInt32IndexFormat = !!i1595[3]
  i1594.vertexCount = i1595[4]
  i1594.aabb = i1595[5]
  var i1597 = i1595[6]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( !!i1597[i + 0] );
  }
  i1594.streams = i1596
  i1594.vertices = i1595[7]
  var i1599 = i1595[8]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1599[i + 0]) );
  }
  i1594.subMeshes = i1598
  var i1601 = i1595[9]
  var i1600 = []
  for(var i = 0; i < i1601.length; i += 16) {
    i1600.push( new pc.Mat4().setData(i1601[i + 0], i1601[i + 1], i1601[i + 2], i1601[i + 3],  i1601[i + 4], i1601[i + 5], i1601[i + 6], i1601[i + 7],  i1601[i + 8], i1601[i + 9], i1601[i + 10], i1601[i + 11],  i1601[i + 12], i1601[i + 13], i1601[i + 14], i1601[i + 15]) );
  }
  i1594.bindposes = i1600
  var i1603 = i1595[10]
  var i1602 = []
  for(var i = 0; i < i1603.length; i += 1) {
    i1602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1603[i + 0]) );
  }
  i1594.blendShapes = i1602
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1609 = data
  i1608.triangles = i1609[0]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1615 = data
  i1614.name = i1615[0]
  var i1617 = i1615[1]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1617[i + 0]) );
  }
  i1614.frames = i1616
  return i1614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1618 = root || new pc.UnityMaterial()
  var i1619 = data
  i1618.name = i1619[0]
  request.r(i1619[1], i1619[2], 0, i1618, 'shader')
  i1618.renderQueue = i1619[3]
  i1618.enableInstancing = !!i1619[4]
  var i1621 = i1619[5]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1621[i + 0]) );
  }
  i1618.floatParameters = i1620
  var i1623 = i1619[6]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1623[i + 0]) );
  }
  i1618.colorParameters = i1622
  var i1625 = i1619[7]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1625[i + 0]) );
  }
  i1618.vectorParameters = i1624
  var i1627 = i1619[8]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1627[i + 0]) );
  }
  i1618.textureParameters = i1626
  var i1629 = i1619[9]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1629[i + 0]) );
  }
  i1618.materialFlags = i1628
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1633 = data
  i1632.name = i1633[0]
  i1632.value = i1633[1]
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1637 = data
  i1636.name = i1637[0]
  i1636.value = new pc.Color(i1637[1], i1637[2], i1637[3], i1637[4])
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1641 = data
  i1640.name = i1641[0]
  i1640.value = new pc.Vec4( i1641[1], i1641[2], i1641[3], i1641[4] )
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1645 = data
  i1644.name = i1645[0]
  request.r(i1645[1], i1645[2], 0, i1644, 'value')
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.enabled = !!i1649[1]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.width = i1651[1]
  i1650.height = i1651[2]
  i1650.mipmapCount = i1651[3]
  i1650.anisoLevel = i1651[4]
  i1650.filterMode = i1651[5]
  i1650.hdr = !!i1651[6]
  i1650.format = i1651[7]
  i1650.wrapMode = i1651[8]
  i1650.alphaIsTransparency = !!i1651[9]
  i1650.alphaSource = i1651[10]
  i1650.graphicsFormat = i1651[11]
  i1650.sRGBTexture = !!i1651[12]
  i1650.desiredColorSpace = i1651[13]
  i1650.wrapU = i1651[14]
  i1650.wrapV = i1651[15]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1653 = data
  i1652.position = new pc.Vec3( i1653[0], i1653[1], i1653[2] )
  i1652.scale = new pc.Vec3( i1653[3], i1653[4], i1653[5] )
  i1652.rotation = new pc.Quat(i1653[6], i1653[7], i1653[8], i1653[9])
  return i1652
}

Deserializers["Processor"] = function (request, data, root) {
  var i1654 = root || request.c( 'Processor' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'rawMaterialStackManager')
  request.r(i1655[2], i1655[3], 0, i1654, 'productStackManager')
  request.r(i1655[4], i1655[5], 0, i1654, 'processPosition')
  i1654.ispprocess = !!i1655[6]
  i1654.itemType = i1655[7]
  request.r(i1655[8], i1655[9], 0, i1654, 'progressBar')
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1657 = data
  i1656.center = new pc.Vec3( i1657[0], i1657[1], i1657[2] )
  i1656.size = new pc.Vec3( i1657[3], i1657[4], i1657[5] )
  i1656.enabled = !!i1657[6]
  i1656.isTrigger = !!i1657[7]
  request.r(i1657[8], i1657[9], 0, i1656, 'material')
  return i1656
}

Deserializers["GroundItemStackManager"] = function (request, data, root) {
  var i1658 = root || request.c( 'GroundItemStackManager' )
  var i1659 = data
  i1658.stackedItemType = i1659[0]
  var i1661 = i1659[1]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('GroundItemStack')))
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 1, i1660, '')
  }
  i1658.stackList = i1660
  i1658.totalStackedItemsAmount = i1659[2]
  i1658.totalMaxAmount = i1659[3]
  i1658.stackItemAcion = request.d('UnityEngine.Events.UnityEvent', i1659[4], i1658.stackItemAcion)
  i1658.Test = !!i1659[5]
  request.r(i1659[6], i1659[7], 0, i1658, 'nomalSR')
  request.r(i1659[8], i1659[9], 0, i1658, 'heighLightSR')
  return i1658
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1665 = data
  i1664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1665[0], i1664.m_PersistentCalls)
  return i1664
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.add(request.d('UnityEngine.Events.PersistentCall', i1669[i + 0]));
  }
  i1666.m_Calls = i1668
  return i1666
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1673 = data
  request.r(i1673[0], i1673[1], 0, i1672, 'm_Target')
  i1672.m_TargetAssemblyTypeName = i1673[2]
  i1672.m_MethodName = i1673[3]
  i1672.m_Mode = i1673[4]
  i1672.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1673[5], i1672.m_Arguments)
  i1672.m_CallState = i1673[6]
  return i1672
}

Deserializers["GroundItemStack"] = function (request, data, root) {
  var i1674 = root || request.c( 'GroundItemStack' )
  var i1675 = data
  i1674.maxStackAmount = i1675[0]
  i1674.maxHeight = i1675[1]
  i1674.iscomplet_bend = !!i1675[2]
  i1674.iscomplet_origina = !!i1675[3]
  i1674.stackedItemType = i1675[4]
  i1674.isOpenBend = !!i1675[5]
  i1674.bendDistance = i1675[6]
  i1674.bendDuration = i1675[7]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1677 = data
  i1676.name = i1677[0]
  i1676.tagId = i1677[1]
  i1676.enabled = !!i1677[2]
  i1676.isStatic = !!i1677[3]
  i1676.layer = i1677[4]
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1679 = data
  i1678.color = new pc.Color(i1679[0], i1679[1], i1679[2], i1679[3])
  request.r(i1679[4], i1679[5], 0, i1678, 'sprite')
  i1678.flipX = !!i1679[6]
  i1678.flipY = !!i1679[7]
  i1678.drawMode = i1679[8]
  i1678.size = new pc.Vec2( i1679[9], i1679[10] )
  i1678.tileMode = i1679[11]
  i1678.adaptiveModeThreshold = i1679[12]
  i1678.maskInteraction = i1679[13]
  i1678.spriteSortPoint = i1679[14]
  i1678.enabled = !!i1679[15]
  request.r(i1679[16], i1679[17], 0, i1678, 'sharedMaterial')
  var i1681 = i1679[18]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 2) {
  request.r(i1681[i + 0], i1681[i + 1], 2, i1680, '')
  }
  i1678.sharedMaterials = i1680
  i1678.receiveShadows = !!i1679[19]
  i1678.shadowCastingMode = i1679[20]
  i1678.sortingLayerID = i1679[21]
  i1678.sortingOrder = i1679[22]
  i1678.lightmapIndex = i1679[23]
  i1678.lightmapSceneIndex = i1679[24]
  i1678.lightmapScaleOffset = new pc.Vec4( i1679[25], i1679[26], i1679[27], i1679[28] )
  i1678.lightProbeUsage = i1679[29]
  i1678.reflectionProbeUsage = i1679[30]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1685 = data
  request.r(i1685[0], i1685[1], 0, i1684, 'sharedMesh')
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'additionalVertexStreams')
  i1686.enabled = !!i1687[2]
  request.r(i1687[3], i1687[4], 0, i1686, 'sharedMaterial')
  var i1689 = i1687[5]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 2) {
  request.r(i1689[i + 0], i1689[i + 1], 2, i1688, '')
  }
  i1686.sharedMaterials = i1688
  i1686.receiveShadows = !!i1687[6]
  i1686.shadowCastingMode = i1687[7]
  i1686.sortingLayerID = i1687[8]
  i1686.sortingOrder = i1687[9]
  i1686.lightmapIndex = i1687[10]
  i1686.lightmapSceneIndex = i1687[11]
  i1686.lightmapScaleOffset = new pc.Vec4( i1687[12], i1687[13], i1687[14], i1687[15] )
  i1686.lightProbeUsage = i1687[16]
  i1686.reflectionProbeUsage = i1687[17]
  return i1686
}

Deserializers["Item"] = function (request, data, root) {
  var i1690 = root || request.c( 'Item' )
  var i1691 = data
  i1690.itemType = i1691[0]
  i1690.movementEase = new pc.AnimationCurve( { keys_flow: i1691[1] } )
  i1690.stackHeight = i1691[2]
  i1690.itemWidth = i1691[3]
  i1690.value = i1691[4]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1693 = data
  i1692.pivot = new pc.Vec2( i1693[0], i1693[1] )
  i1692.anchorMin = new pc.Vec2( i1693[2], i1693[3] )
  i1692.anchorMax = new pc.Vec2( i1693[4], i1693[5] )
  i1692.sizeDelta = new pc.Vec2( i1693[6], i1693[7] )
  i1692.anchoredPosition3D = new pc.Vec3( i1693[8], i1693[9], i1693[10] )
  i1692.rotation = new pc.Quat(i1693[11], i1693[12], i1693[13], i1693[14])
  i1692.scale = new pc.Vec3( i1693[15], i1693[16], i1693[17] )
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1695 = data
  i1694.cullTransparentMesh = !!i1695[0]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1697 = data
  i1696.m_Alpha = i1697[0]
  i1696.m_Interactable = !!i1697[1]
  i1696.m_BlocksRaycasts = !!i1697[2]
  i1696.m_IgnoreParentGroups = !!i1697[3]
  i1696.enabled = !!i1697[4]
  return i1696
}

Deserializers["UIHealthBar"] = function (request, data, root) {
  var i1698 = root || request.c( 'UIHealthBar' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'fillImage')
  request.r(i1699[2], i1699[3], 0, i1698, 'bufferFillImage')
  i1698.fillAnimDuration = i1699[4]
  i1698.bufferDelay = i1699[5]
  i1698.bufferAnimDuration = i1699[6]
  request.r(i1699[7], i1699[8], 0, i1698, 'targetObject')
  request.r(i1699[9], i1699[10], 0, i1698, 'canvasGroup')
  request.r(i1699[11], i1699[12], 0, i1698, 'animationRoot')
  i1698.worldOffset = new pc.Vec3( i1699[13], i1699[14], i1699[15] )
  i1698.cameraScaleFactor = i1699[16]
  i1698.showAnim = request.d('ShowAnimSettings', i1699[17], i1698.showAnim)
  i1698.hideAnim = request.d('HideAnimSettings', i1699[18], i1698.hideAnim)
  i1698.loopAnim = request.d('LoopAnimSettings', i1699[19], i1698.loopAnim)
  return i1698
}

Deserializers["ShowAnimSettings"] = function (request, data, root) {
  var i1700 = root || request.c( 'ShowAnimSettings' )
  var i1701 = data
  i1700.animMode = i1701[0]
  i1700.scaleStart = i1701[1]
  i1700.scaleBounce = i1701[2]
  i1700.duration = i1701[3]
  i1700.fadeDuration = i1701[4]
  i1700.floatHeight = i1701[5]
  i1700.floatDuration = i1701[6]
  return i1700
}

Deserializers["HideAnimSettings"] = function (request, data, root) {
  var i1702 = root || request.c( 'HideAnimSettings' )
  var i1703 = data
  i1702.animMode = i1703[0]
  i1702.duration = i1703[1]
  return i1702
}

Deserializers["LoopAnimSettings"] = function (request, data, root) {
  var i1704 = root || request.c( 'LoopAnimSettings' )
  var i1705 = data
  i1704.animMode = i1705[0]
  i1704.scaleAmount = i1705[1]
  i1704.scaleDuration = i1705[2]
  i1704.floatHeight = i1705[3]
  i1704.floatDuration = i1705[4]
  return i1704
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.Image' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'm_Sprite')
  i1706.m_Type = i1707[2]
  i1706.m_PreserveAspect = !!i1707[3]
  i1706.m_FillCenter = !!i1707[4]
  i1706.m_FillMethod = i1707[5]
  i1706.m_FillAmount = i1707[6]
  i1706.m_FillClockwise = !!i1707[7]
  i1706.m_FillOrigin = i1707[8]
  i1706.m_UseSpriteMesh = !!i1707[9]
  i1706.m_PixelsPerUnitMultiplier = i1707[10]
  request.r(i1707[11], i1707[12], 0, i1706, 'm_Material')
  i1706.m_Maskable = !!i1707[13]
  i1706.m_Color = new pc.Color(i1707[14], i1707[15], i1707[16], i1707[17])
  i1706.m_RaycastTarget = !!i1707[18]
  i1706.m_RaycastPadding = new pc.Vec4( i1707[19], i1707[20], i1707[21], i1707[22] )
  return i1706
}

Deserializers["Enemy"] = function (request, data, root) {
  var i1708 = root || request.c( 'Enemy' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'attackCollider')
  request.r(i1709[2], i1709[3], 0, i1708, 'alertCollider')
  i1708.currentState = i1709[4]
  i1708.isDie = !!i1709[5]
  i1708.mHp = i1709[6]
  i1708.mHpMax = i1709[7]
  request.r(i1709[8], i1709[9], 0, i1708, 'mAnimator')
  request.r(i1709[10], i1709[11], 0, i1708, 'mCollider')
  request.r(i1709[12], i1709[13], 0, i1708, 'mRigidbody')
  i1708.mMoveSpeed = i1709[14]
  i1708.mTurnSmoothTime = i1709[15]
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1711 = data
  i1710.mass = i1711[0]
  i1710.drag = i1711[1]
  i1710.angularDrag = i1711[2]
  i1710.useGravity = !!i1711[3]
  i1710.isKinematic = !!i1711[4]
  i1710.constraints = i1711[5]
  i1710.maxAngularVelocity = i1711[6]
  i1710.collisionDetectionMode = i1711[7]
  i1710.interpolation = i1711[8]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1713 = data
  i1712.center = new pc.Vec3( i1713[0], i1713[1], i1713[2] )
  i1712.radius = i1713[3]
  i1712.height = i1713[4]
  i1712.direction = i1713[5]
  i1712.enabled = !!i1713[6]
  i1712.isTrigger = !!i1713[7]
  request.r(i1713[8], i1713[9], 0, i1712, 'material')
  return i1712
}

Deserializers["AnimationInvoke"] = function (request, data, root) {
  var i1714 = root || request.c( 'AnimationInvoke' )
  var i1715 = data
  request.r(i1715[0], i1715[1], 0, i1714, 'enemy')
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'animatorController')
  request.r(i1717[2], i1717[3], 0, i1716, 'avatar')
  i1716.updateMode = i1717[4]
  i1716.hasTransformHierarchy = !!i1717[5]
  i1716.applyRootMotion = !!i1717[6]
  var i1719 = i1717[7]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 2) {
  request.r(i1719[i + 0], i1719[i + 1], 2, i1718, '')
  }
  i1716.humanBones = i1718
  i1716.enabled = !!i1717[8]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1723 = data
  i1722.center = new pc.Vec3( i1723[0], i1723[1], i1723[2] )
  i1722.radius = i1723[3]
  i1722.enabled = !!i1723[4]
  i1722.isTrigger = !!i1723[5]
  request.r(i1723[6], i1723[7], 0, i1722, 'material')
  return i1722
}

Deserializers["Customer"] = function (request, data, root) {
  var i1724 = root || request.c( 'Customer' )
  var i1725 = data
  request.r(i1725[0], i1725[1], 0, i1724, 'mAnimator')
  request.r(i1725[2], i1725[3], 0, i1724, 'mCollider')
  request.r(i1725[4], i1725[5], 0, i1724, 'mRigidbody')
  i1724.mMoveSpeed = i1725[6]
  i1724.mTurnSmoothTime = i1725[7]
  return i1724
}

Deserializers["PurchaseZone_Clerk"] = function (request, data, root) {
  var i1726 = root || request.c( 'PurchaseZone_Clerk' )
  var i1727 = data
  i1726.completeAction = request.d('UnityEngine.Events.UnityEvent', i1727[0], i1726.completeAction)
  i1726.price = i1727[1]
  i1726.requiredItemType = i1727[2]
  i1726.iscomplete = !!i1727[3]
  i1726.mPurchase = request.d('UnityEngine.Events.UnityEvent', i1727[4], i1726.mPurchase)
  i1726.isCanBreath = !!i1727[5]
  request.r(i1727[6], i1727[7], 0, i1726, 'fillImage')
  var i1729 = i1727[8]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1729.length; i += 2) {
  request.r(i1729[i + 0], i1729[i + 1], 1, i1728, '')
  }
  i1726.remainingPrice_Img = i1728
  request.r(i1727[9], i1727[10], 0, i1726, 'borderNomal')
  request.r(i1727[11], i1727[12], 0, i1726, 'contentHeighLight')
  request.r(i1727[13], i1727[14], 0, i1726, 'borderNomoney')
  return i1726
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_ObjectArgument')
  i1730.m_ObjectArgumentAssemblyTypeName = i1731[2]
  i1730.m_IntArgument = i1731[3]
  i1730.m_FloatArgument = i1731[4]
  i1730.m_StringArgument = i1731[5]
  i1730.m_BoolArgument = !!i1731[6]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1735 = data
  i1734.planeDistance = i1735[0]
  i1734.referencePixelsPerUnit = i1735[1]
  i1734.isFallbackOverlay = !!i1735[2]
  i1734.renderMode = i1735[3]
  i1734.renderOrder = i1735[4]
  i1734.sortingLayerName = i1735[5]
  i1734.sortingOrder = i1735[6]
  i1734.scaleFactor = i1735[7]
  request.r(i1735[8], i1735[9], 0, i1734, 'worldCamera')
  i1734.overrideSorting = !!i1735[10]
  i1734.pixelPerfect = !!i1735[11]
  i1734.targetDisplay = i1735[12]
  i1734.overridePixelPerfect = !!i1735[13]
  i1734.enabled = !!i1735[14]
  return i1734
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1736 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1737 = data
  i1736.m_UiScaleMode = i1737[0]
  i1736.m_ReferencePixelsPerUnit = i1737[1]
  i1736.m_ScaleFactor = i1737[2]
  i1736.m_ReferenceResolution = new pc.Vec2( i1737[3], i1737[4] )
  i1736.m_ScreenMatchMode = i1737[5]
  i1736.m_MatchWidthOrHeight = i1737[6]
  i1736.m_PhysicalUnit = i1737[7]
  i1736.m_FallbackScreenDPI = i1737[8]
  i1736.m_DefaultSpriteDPI = i1737[9]
  i1736.m_DynamicPixelsPerUnit = i1737[10]
  i1736.m_PresetInfoIsWorld = !!i1737[11]
  return i1736
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1739 = data
  i1738.m_IgnoreReversedGraphics = !!i1739[0]
  i1738.m_BlockingObjects = i1739[1]
  i1738.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1739[2] )
  return i1738
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1741 = data
  i1740.m_Spacing = i1741[0]
  i1740.m_ChildForceExpandWidth = !!i1741[1]
  i1740.m_ChildForceExpandHeight = !!i1741[2]
  i1740.m_ChildControlWidth = !!i1741[3]
  i1740.m_ChildControlHeight = !!i1741[4]
  i1740.m_ChildScaleWidth = !!i1741[5]
  i1740.m_ChildScaleHeight = !!i1741[6]
  i1740.m_ReverseArrangement = !!i1741[7]
  i1740.m_Padding = UnityEngine.RectOffset.FromPaddings(i1741[8], i1741[9], i1741[10], i1741[11])
  i1740.m_ChildAlignment = i1741[12]
  return i1740
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1743 = data
  i1742.m_HorizontalFit = i1743[0]
  i1742.m_VerticalFit = i1743[1]
  return i1742
}

Deserializers["ConveyorController"] = function (request, data, root) {
  var i1744 = root || request.c( 'ConveyorController' )
  var i1745 = data
  i1744.OnItemSpawned = request.d('GameObjectEvent', i1745[0], i1744.OnItemSpawned)
  i1744.OnItemReached = request.d('GameObjectEvent', i1745[1], i1744.OnItemReached)
  request.r(i1745[2], i1745[3], 0, i1744, 'start_groundItemStackManager')
  request.r(i1745[4], i1745[5], 0, i1744, 'end_groundItemStackManager')
  request.r(i1745[6], i1745[7], 0, i1744, 'poolContainer')
  request.r(i1745[8], i1745[9], 0, i1744, 'spawnPosition')
  request.r(i1745[10], i1745[11], 0, i1744, 'despawnPosition')
  i1744.moveSpeed = i1745[12]
  i1744.spawnInterval = i1745[13]
  request.r(i1745[14], i1745[15], 0, i1744, 'itemPrefab')
  i1744.poolSize = i1745[16]
  i1744.autoStart = !!i1745[17]
  return i1744
}

Deserializers["GameObjectEvent"] = function (request, data, root) {
  var i1746 = root || request.c( 'GameObjectEvent' )
  var i1747 = data
  i1746.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1747[0], i1746.m_PersistentCalls)
  return i1746
}

Deserializers["ObjectFX"] = function (request, data, root) {
  var i1748 = root || request.c( 'ObjectFX' )
  var i1749 = data
  i1748.showEffectType = i1749[0]
  i1748.hideEffectType = i1749[1]
  i1748.duration = i1749[2]
  i1748.easeType = i1749[3]
  i1748.moveDistance = i1749[4]
  i1748.autoPlayOnEnable = !!i1749[5]
  i1748.onShowComplete = request.d('UnityEngine.Events.UnityEvent', i1749[6], i1748.onShowComplete)
  i1748.onHideComplete = request.d('UnityEngine.Events.UnityEvent', i1749[7], i1748.onHideComplete)
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1751 = data
  i1750.name = i1751[0]
  i1750.atlasId = i1751[1]
  i1750.mipmapCount = i1751[2]
  i1750.hdr = !!i1751[3]
  i1750.size = i1751[4]
  i1750.anisoLevel = i1751[5]
  i1750.filterMode = i1751[6]
  var i1753 = i1751[7]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 4) {
    i1752.push( UnityEngine.Rect.MinMaxRect(i1753[i + 0], i1753[i + 1], i1753[i + 2], i1753[i + 3]) );
  }
  i1750.rects = i1752
  i1750.wrapU = i1751[8]
  i1750.wrapV = i1751[9]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1757 = data
  i1756.name = i1757[0]
  i1756.index = i1757[1]
  i1756.startup = !!i1757[2]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1759 = data
  i1758.aspect = i1759[0]
  i1758.orthographic = !!i1759[1]
  i1758.orthographicSize = i1759[2]
  i1758.backgroundColor = new pc.Color(i1759[3], i1759[4], i1759[5], i1759[6])
  i1758.nearClipPlane = i1759[7]
  i1758.farClipPlane = i1759[8]
  i1758.fieldOfView = i1759[9]
  i1758.depth = i1759[10]
  i1758.clearFlags = i1759[11]
  i1758.cullingMask = i1759[12]
  i1758.rect = i1759[13]
  request.r(i1759[14], i1759[15], 0, i1758, 'targetTexture')
  i1758.usePhysicalProperties = !!i1759[16]
  i1758.focalLength = i1759[17]
  i1758.sensorSize = new pc.Vec2( i1759[18], i1759[19] )
  i1758.lensShift = new pc.Vec2( i1759[20], i1759[21] )
  i1758.gateFit = i1759[22]
  i1758.commandBufferCount = i1759[23]
  i1758.cameraType = i1759[24]
  i1758.enabled = !!i1759[25]
  return i1758
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i1760 = root || request.c( 'CameraManager' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'mCamera')
  i1760.isCress = !!i1761[2]
  i1760.mCameraCressNum = i1761[3]
  i1760.mCameraVerNum = i1761[4]
  i1760.mCameraCressNumFar = i1761[5]
  i1760.mCameraVerNumFar = i1761[6]
  i1760.switchTimer = i1761[7]
  i1760.stayTimer = i1761[8]
  var i1763 = i1761[9]
  var i1762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 1, i1762, '')
  }
  i1760.forceCameras = i1762
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1767 = data
  i1766.type = i1767[0]
  i1766.color = new pc.Color(i1767[1], i1767[2], i1767[3], i1767[4])
  i1766.cullingMask = i1767[5]
  i1766.intensity = i1767[6]
  i1766.range = i1767[7]
  i1766.spotAngle = i1767[8]
  i1766.shadows = i1767[9]
  i1766.shadowNormalBias = i1767[10]
  i1766.shadowBias = i1767[11]
  i1766.shadowStrength = i1767[12]
  i1766.shadowResolution = i1767[13]
  i1766.lightmapBakeType = i1767[14]
  i1766.renderMode = i1767[15]
  request.r(i1767[16], i1767[17], 0, i1766, 'cookie')
  i1766.cookieSize = i1767[18]
  i1766.shadowNearPlane = i1767[19]
  i1766.occlusionMaskChannel = i1767[20]
  i1766.enabled = !!i1767[21]
  return i1766
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1769 = data
  i1768.m_Version = i1769[0]
  i1768.m_UsePipelineSettings = !!i1769[1]
  i1768.m_AdditionalLightsShadowResolutionTier = i1769[2]
  i1768.m_LightLayerMask = i1769[3]
  i1768.m_RenderingLayers = i1769[4]
  i1768.m_CustomShadowLayers = !!i1769[5]
  i1768.m_ShadowLayerMask = i1769[6]
  i1768.m_ShadowRenderingLayers = i1769[7]
  i1768.m_LightCookieSize = new pc.Vec2( i1769[8], i1769[9] )
  i1768.m_LightCookieOffset = new pc.Vec2( i1769[10], i1769[11] )
  i1768.m_SoftShadowQuality = i1769[12]
  return i1768
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'm_FirstSelected')
  i1770.m_sendNavigationEvents = !!i1771[2]
  i1770.m_DragThreshold = i1771[3]
  return i1770
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1773 = data
  i1772.m_HorizontalAxis = i1773[0]
  i1772.m_VerticalAxis = i1773[1]
  i1772.m_SubmitButton = i1773[2]
  i1772.m_CancelButton = i1773[3]
  i1772.m_InputActionsPerSecond = i1773[4]
  i1772.m_RepeatDelay = i1773[5]
  i1772.m_ForceModuleActive = !!i1773[6]
  i1772.m_SendPointerHoverToParent = !!i1773[7]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'sharedMesh')
  i1774.convex = !!i1775[2]
  i1774.enabled = !!i1775[3]
  i1774.isTrigger = !!i1775[4]
  request.r(i1775[5], i1775[6], 0, i1774, 'material')
  return i1774
}

Deserializers["Player"] = function (request, data, root) {
  var i1776 = root || request.c( 'Player' )
  var i1777 = data
  request.r(i1777[0], i1777[1], 0, i1776, 'mJoystick')
  request.r(i1777[2], i1777[3], 0, i1776, 'mRigidbody')
  i1776.mAngleDis = i1777[4]
  request.r(i1777[5], i1777[6], 0, i1776, 'mAnimator')
  request.r(i1777[7], i1777[8], 0, i1776, 'mCollider')
  i1776.mHp = i1777[9]
  i1776.mHpMax = i1777[10]
  request.r(i1777[11], i1777[12], 0, i1776, 'mHpUi')
  request.r(i1777[13], i1777[14], 0, i1776, 'itemStackManager')
  request.r(i1777[15], i1777[16], 0, i1776, 'targetGroundStackManager')
  i1776.itemDropOffTimer = i1777[17]
  i1776.itemDropOffCooldown = i1777[18]
  i1776.isDroppingOffItem = !!i1777[19]
  i1776.isCollectingItem = !!i1777[20]
  request.r(i1777[21], i1777[22], 0, i1776, 'maxImg')
  request.r(i1777[23], i1777[24], 0, i1776, 'mAttackCollider')
  request.r(i1777[25], i1777[26], 0, i1776, 'attackRangeIndicator')
  i1776.IsAtHome = !!i1777[27]
  return i1776
}

Deserializers["AttackRangeIndicator"] = function (request, data, root) {
  var i1778 = root || request.c( 'AttackRangeIndicator' )
  var i1779 = data
  request.r(i1779[0], i1779[1], 0, i1778, 'indicatorMaterial')
  i1778.radius = i1779[2]
  i1778.startAngle = i1779[3]
  i1778.endAngle = i1779[4]
  i1778.segments = i1779[5]
  i1778.indicatorColor = new pc.Color(i1779[6], i1779[7], i1779[8], i1779[9])
  i1778.heightOffset = i1779[10]
  i1778.fadeDuration = i1779[11]
  return i1778
}

Deserializers["ItemStackManager"] = function (request, data, root) {
  var i1780 = root || request.c( 'ItemStackManager' )
  var i1781 = data
  var i1783 = i1781[0]
  var i1782 = new (System.Collections.Generic.List$1(Bridge.ns('ItemStack')))
  for(var i = 0; i < i1783.length; i += 2) {
  request.r(i1783[i + 0], i1783[i + 1], 1, i1782, '')
  }
  i1780.stackList = i1782
  i1780.startPosition = new pc.Vec3( i1781[1], i1781[2], i1781[3] )
  i1780.spacingDirection = new pc.Vec3( i1781[4], i1781[5], i1781[6] )
  i1780.amountOfStackInUse = i1781[7]
  return i1780
}

Deserializers["ItemStack"] = function (request, data, root) {
  var i1786 = root || request.c( 'ItemStack' )
  var i1787 = data
  i1786.maxStackAmount = i1787[0]
  i1786.maxHeight = i1787[1]
  i1786.iscomplet_bend = !!i1787[2]
  i1786.iscomplet_origina = !!i1787[3]
  i1786.stackedItemType = i1787[4]
  i1786.isOpenBend = !!i1787[5]
  i1786.bendDistance = i1787[6]
  i1786.bendDuration = i1787[7]
  return i1786
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1788 = root || request.c( 'UIManager' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 1, i1790, '')
  }
  i1788.mCress = i1790
  var i1793 = i1789[1]
  var i1792 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 1, i1792, '')
  }
  i1788.mVer = i1792
  var i1795 = i1789[2]
  var i1794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1795.length; i += 2) {
  request.r(i1795[i + 0], i1795[i + 1], 1, i1794, '')
  }
  i1788.mNumSprites = i1794
  var i1797 = i1789[3]
  var i1796 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1797.length; i += 2) {
  request.r(i1797[i + 0], i1797[i + 1], 1, i1796, '')
  }
  i1788.gold = i1796
  request.r(i1789[4], i1789[5], 0, i1788, 'mGoinUI')
  request.r(i1789[6], i1789[7], 0, i1788, 'mCanvas')
  request.r(i1789[8], i1789[9], 0, i1788, 'mDangerImage')
  i1788.mIsDanger = !!i1789[10]
  request.r(i1789[11], i1789[12], 0, i1788, 'mEnemyHps')
  return i1788
}

Deserializers["MainPanel"] = function (request, data, root) {
  var i1802 = root || request.c( 'MainPanel' )
  var i1803 = data
  i1802.mTime = i1803[0]
  request.r(i1803[1], i1803[2], 0, i1802, 'Tip')
  request.r(i1803[3], i1803[4], 0, i1802, 'player')
  request.r(i1803[5], i1803[6], 0, i1802, 'joystickTip')
  return i1802
}

Deserializers["TouchArea"] = function (request, data, root) {
  var i1804 = root || request.c( 'TouchArea' )
  var i1805 = data
  i1804.mOutPos = new pc.Vec2( i1805[0], i1805[1] )
  request.r(i1805[2], i1805[3], 0, i1804, 'mJoystickBG')
  request.r(i1805[4], i1805[5], 0, i1804, 'mJoystickHandle')
  request.r(i1805[6], i1805[7], 0, i1804, 'mCanvasGp')
  i1804.IsTouching = !!i1805[8]
  i1804.mTime = i1805[9]
  return i1804
}

Deserializers["YangJoystick"] = function (request, data, root) {
  var i1806 = root || request.c( 'YangJoystick' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'BG')
  return i1806
}

Deserializers["UIBubbleExpression"] = function (request, data, root) {
  var i1808 = root || request.c( 'UIBubbleExpression' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'expressionImage')
  request.r(i1809[2], i1809[3], 0, i1808, 'defaultExpression')
  request.r(i1809[4], i1809[5], 0, i1808, 'happyExpression')
  request.r(i1809[6], i1809[7], 0, i1808, 'angryExpression')
  i1808.isAutoHide = !!i1809[8]
  i1808.autoHideDelay = i1809[9]
  request.r(i1809[10], i1809[11], 0, i1808, 'targetObject')
  request.r(i1809[12], i1809[13], 0, i1808, 'canvasGroup')
  request.r(i1809[14], i1809[15], 0, i1808, 'animationRoot')
  i1808.worldOffset = new pc.Vec3( i1809[16], i1809[17], i1809[18] )
  i1808.cameraScaleFactor = i1809[19]
  i1808.showAnim = request.d('ShowAnimSettings', i1809[20], i1808.showAnim)
  i1808.hideAnim = request.d('HideAnimSettings', i1809[21], i1808.hideAnim)
  i1808.loopAnim = request.d('LoopAnimSettings', i1809[22], i1808.loopAnim)
  return i1808
}

Deserializers["UIProgress"] = function (request, data, root) {
  var i1810 = root || request.c( 'UIProgress' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'progressFillImage')
  var i1813 = i1811[2]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i1813.length; i += 2) {
  request.r(i1813[i + 0], i1813[i + 1], 1, i1812, '')
  }
  i1810.numberImages = i1812
  i1810.progressAnimDuration = i1811[3]
  request.r(i1811[4], i1811[5], 0, i1810, 'targetObject')
  request.r(i1811[6], i1811[7], 0, i1810, 'canvasGroup')
  request.r(i1811[8], i1811[9], 0, i1810, 'animationRoot')
  i1810.worldOffset = new pc.Vec3( i1811[10], i1811[11], i1811[12] )
  i1810.cameraScaleFactor = i1811[13]
  i1810.showAnim = request.d('ShowAnimSettings', i1811[14], i1810.showAnim)
  i1810.hideAnim = request.d('HideAnimSettings', i1811[15], i1810.hideAnim)
  i1810.loopAnim = request.d('LoopAnimSettings', i1811[16], i1810.loopAnim)
  return i1810
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i1814 = root || request.c( 'LunaManager' )
  var i1815 = data
  i1814.isGameStart = !!i1815[0]
  i1814.isGameOver = !!i1815[1]
  return i1814
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1816 = root || request.c( 'AudioManager' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'mBgm')
  request.r(i1817[2], i1817[3], 0, i1816, 'mGoin')
  return i1816
}

Deserializers["PoolManager"] = function (request, data, root) {
  var i1818 = root || request.c( 'PoolManager' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'mMoneyPrefab')
  request.r(i1819[2], i1819[3], 0, i1818, 'mRawMaterialPrefab')
  request.r(i1819[4], i1819[5], 0, i1818, 'mProductPrefab')
  request.r(i1819[6], i1819[7], 0, i1818, 'mEnemyHpPrefab')
  request.r(i1819[8], i1819[9], 0, i1818, 'mEnemyPrefab')
  request.r(i1819[10], i1819[11], 0, i1818, 'mCustomerPrefab')
  return i1818
}

Deserializers["NpcManager"] = function (request, data, root) {
  var i1820 = root || request.c( 'NpcManager' )
  var i1821 = data
  var i1823 = i1821[0]
  var i1822 = new (System.Collections.Generic.List$1(Bridge.ns('Enemy')))
  for(var i = 0; i < i1823.length; i += 2) {
  request.r(i1823[i + 0], i1823[i + 1], 1, i1822, '')
  }
  i1820.mEnemies = i1822
  var i1825 = i1821[1]
  var i1824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1825.length; i += 2) {
  request.r(i1825[i + 0], i1825[i + 1], 1, i1824, '')
  }
  i1820.mCustomerPath = i1824
  var i1827 = i1821[2]
  var i1826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1827.length; i += 2) {
  request.r(i1827[i + 0], i1827[i + 1], 1, i1826, '')
  }
  i1820.mCustomerExitPath = i1826
  return i1820
}

Deserializers["LoaderNpc"] = function (request, data, root) {
  var i1830 = root || request.c( 'LoaderNpc' )
  var i1831 = data
  var i1833 = i1831[0]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1833.length; i += 2) {
  request.r(i1833[i + 0], i1833[i + 1], 1, i1832, '')
  }
  i1830.movepath = i1832
  request.r(i1831[1], i1831[2], 0, i1830, 'itemStackManager')
  request.r(i1831[3], i1831[4], 0, i1830, 'sourceGroundStackManager')
  request.r(i1831[5], i1831[6], 0, i1830, 'targetGroundStackManager')
  i1830.loadCapacity = i1831[7]
  i1830.loadUnloadDelay = i1831[8]
  i1830.isWorking = !!i1831[9]
  request.r(i1831[10], i1831[11], 0, i1830, 'mAnimator')
  request.r(i1831[12], i1831[13], 0, i1830, 'mCollider')
  request.r(i1831[14], i1831[15], 0, i1830, 'mRigidbody')
  i1830.mMoveSpeed = i1831[16]
  i1830.mTurnSmoothTime = i1831[17]
  return i1830
}

Deserializers["ArrowsManager"] = function (request, data, root) {
  var i1834 = root || request.c( 'ArrowsManager' )
  var i1835 = data
  request.r(i1835[0], i1835[1], 0, i1834, 'lineMaterial')
  i1834.lineWidth = i1835[2]
  request.r(i1835[3], i1835[4], 0, i1834, 'mArrowsParent')
  var i1837 = i1835[5]
  var i1836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1837.length; i += 2) {
  request.r(i1837[i + 0], i1837[i + 1], 1, i1836, '')
  }
  i1834.targets = i1836
  i1834.closeDistanceThreshold = i1835[6]
  i1834.yOffset = i1835[7]
  request.r(i1835[8], i1835[9], 0, i1834, 'playerTransform')
  return i1834
}

Deserializers["GameDataEditor"] = function (request, data, root) {
  var i1838 = root || request.c( 'GameDataEditor' )
  var i1839 = data
  i1838.playerSpeed = i1839[0]
  i1838.playerTurnSmoothTime = i1839[1]
  i1838.playerMaxHp = i1839[2]
  i1838.playerAamage = i1839[3]
  i1838.playerAttackInterval = i1839[4]
  i1838.playerAttackRadius = i1839[5]
  i1838.startAngle = i1839[6]
  i1838.endAngle = i1839[7]
  i1838.itemHeightY = i1839[8]
  i1838.enemyCount = i1839[9]
  i1838.enemySpeed = i1839[10]
  i1838.enemyKnockbackForc = i1839[11]
  i1838.enemyMaxHp = i1839[12]
  i1838.enemyAlertRadius = i1839[13]
  i1838.enemyAttackRadius = i1839[14]
  i1838.enemyAttackInterval = i1839[15]
  request.r(i1839[16], i1839[17], 0, i1838, 'patrolAreaMin')
  request.r(i1839[18], i1839[19], 0, i1838, 'patrolAreaMax')
  request.r(i1839[20], i1839[21], 0, i1838, 'enemyHurtMat')
  i1838.customerNeedCount = i1839[22]
  i1838.customerGiveGoin = i1839[23]
  i1838.itemSpawnInterval = i1839[24]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1841 = data
  i1840.ambientIntensity = i1841[0]
  i1840.reflectionIntensity = i1841[1]
  i1840.ambientMode = i1841[2]
  i1840.ambientLight = new pc.Color(i1841[3], i1841[4], i1841[5], i1841[6])
  i1840.ambientSkyColor = new pc.Color(i1841[7], i1841[8], i1841[9], i1841[10])
  i1840.ambientGroundColor = new pc.Color(i1841[11], i1841[12], i1841[13], i1841[14])
  i1840.ambientEquatorColor = new pc.Color(i1841[15], i1841[16], i1841[17], i1841[18])
  i1840.fogColor = new pc.Color(i1841[19], i1841[20], i1841[21], i1841[22])
  i1840.fogEndDistance = i1841[23]
  i1840.fogStartDistance = i1841[24]
  i1840.fogDensity = i1841[25]
  i1840.fog = !!i1841[26]
  request.r(i1841[27], i1841[28], 0, i1840, 'skybox')
  i1840.fogMode = i1841[29]
  var i1843 = i1841[30]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1843[i + 0]) );
  }
  i1840.lightmaps = i1842
  i1840.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1841[31], i1840.lightProbes)
  i1840.lightmapsMode = i1841[32]
  i1840.mixedBakeMode = i1841[33]
  i1840.environmentLightingMode = i1841[34]
  i1840.ambientProbe = new pc.SphericalHarmonicsL2(i1841[35])
  i1840.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1841[36])
  i1840.useReferenceAmbientProbe = !!i1841[37]
  request.r(i1841[38], i1841[39], 0, i1840, 'customReflection')
  request.r(i1841[40], i1841[41], 0, i1840, 'defaultReflection')
  i1840.defaultReflectionMode = i1841[42]
  i1840.defaultReflectionResolution = i1841[43]
  i1840.sunLightObjectId = i1841[44]
  i1840.pixelLightCount = i1841[45]
  i1840.defaultReflectionHDR = !!i1841[46]
  i1840.hasLightDataAsset = !!i1841[47]
  i1840.hasManualGenerate = !!i1841[48]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'lightmapColor')
  request.r(i1847[2], i1847[3], 0, i1846, 'lightmapDirection')
  request.r(i1847[4], i1847[5], 0, i1846, 'shadowMask')
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1848 = root || new UnityEngine.LightProbes()
  var i1849 = data
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1857 = data
  i1856.AdditionalLightsRenderingMode = i1857[0]
  i1856.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1857[1], i1856.LightRenderingMode)
  i1856.MainLightRenderingModeValue = i1857[2]
  i1856.SupportsMainLightShadows = !!i1857[3]
  i1856.MainLightShadowmapResolutionValue = i1857[4]
  i1856.SupportsSoftShadows = !!i1857[5]
  i1856.SoftShadowQualityValue = i1857[6]
  i1856.ShadowDistance = i1857[7]
  i1856.ShadowCascadeCount = i1857[8]
  i1856.Cascade2Split = i1857[9]
  i1856.Cascade3Split = new pc.Vec2( i1857[10], i1857[11] )
  i1856.Cascade4Split = new pc.Vec3( i1857[12], i1857[13], i1857[14] )
  i1856.CascadeBorder = i1857[15]
  i1856.ShadowDepthBias = i1857[16]
  i1856.ShadowNormalBias = i1857[17]
  i1856.RequireDepthTexture = !!i1857[18]
  i1856.RequireOpaqueTexture = !!i1857[19]
  i1856.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1857[20], i1856.scriptableRendererData)
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1859 = data
  i1858.Disabled = i1859[0]
  i1858.PerVertex = i1859[1]
  i1858.PerPixel = i1859[2]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1861 = data
  i1860.opaqueLayerMask = i1861[0]
  i1860.transparentLayerMask = i1861[1]
  var i1863 = i1861[2]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1863[i + 0]) );
  }
  i1860.RenderObjectsFeatures = i1862
  i1860.name = i1861[3]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1867 = data
  i1866.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1867[0], i1866.settings)
  i1866.name = i1867[1]
  i1866.typeName = i1867[2]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1871[i + 0]));
  }
  i1868.ShaderCompilationErrors = i1870
  i1868.name = i1869[1]
  i1868.guid = i1869[2]
  var i1873 = i1869[3]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( i1873[i + 0] );
  }
  i1868.shaderDefinedKeywords = i1872
  var i1875 = i1869[4]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1875[i + 0]) );
  }
  i1868.passes = i1874
  var i1877 = i1869[5]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1877[i + 0]) );
  }
  i1868.usePasses = i1876
  var i1879 = i1869[6]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1879[i + 0]) );
  }
  i1868.defaultParameterValues = i1878
  request.r(i1869[7], i1869[8], 0, i1868, 'unityFallbackShader')
  i1868.readDepth = !!i1869[9]
  i1868.hasDepthOnlyPass = !!i1869[10]
  i1868.isCreatedByShaderGraph = !!i1869[11]
  i1868.disableBatching = !!i1869[12]
  i1868.compiled = !!i1869[13]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1883 = data
  i1882.shaderName = i1883[0]
  i1882.errorMessage = i1883[1]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1888 = root || new pc.UnityShaderPass()
  var i1889 = data
  i1888.id = i1889[0]
  i1888.subShaderIndex = i1889[1]
  i1888.name = i1889[2]
  i1888.passType = i1889[3]
  i1888.grabPassTextureName = i1889[4]
  i1888.usePass = !!i1889[5]
  i1888.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[6], i1888.zTest)
  i1888.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[7], i1888.zWrite)
  i1888.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[8], i1888.culling)
  i1888.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1889[9], i1888.blending)
  i1888.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1889[10], i1888.alphaBlending)
  i1888.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[11], i1888.colorWriteMask)
  i1888.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[12], i1888.offsetUnits)
  i1888.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[13], i1888.offsetFactor)
  i1888.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[14], i1888.stencilRef)
  i1888.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[15], i1888.stencilReadMask)
  i1888.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1889[16], i1888.stencilWriteMask)
  i1888.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1889[17], i1888.stencilOp)
  i1888.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1889[18], i1888.stencilOpFront)
  i1888.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1889[19], i1888.stencilOpBack)
  var i1891 = i1889[20]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1891[i + 0]) );
  }
  i1888.tags = i1890
  var i1893 = i1889[21]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( i1893[i + 0] );
  }
  i1888.passDefinedKeywords = i1892
  var i1895 = i1889[22]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1895[i + 0]) );
  }
  i1888.passDefinedKeywordGroups = i1894
  var i1897 = i1889[23]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1897[i + 0]) );
  }
  i1888.variants = i1896
  var i1899 = i1889[24]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1899[i + 0]) );
  }
  i1888.excludedVariants = i1898
  i1888.hasDepthReader = !!i1889[25]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1901 = data
  i1900.val = i1901[0]
  i1900.name = i1901[1]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1903 = data
  i1902.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1903[0], i1902.src)
  i1902.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1903[1], i1902.dst)
  i1902.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1903[2], i1902.op)
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1905 = data
  i1904.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1905[0], i1904.pass)
  i1904.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1905[1], i1904.fail)
  i1904.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1905[2], i1904.zFail)
  i1904.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1905[3], i1904.comp)
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1909 = data
  i1908.name = i1909[0]
  i1908.value = i1909[1]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1913 = data
  var i1915 = i1913[0]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1912.keywords = i1914
  i1912.hasDiscard = !!i1913[1]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1919 = data
  i1918.passId = i1919[0]
  i1918.subShaderIndex = i1919[1]
  var i1921 = i1919[2]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( i1921[i + 0] );
  }
  i1918.keywords = i1920
  i1918.vertexProgram = i1919[3]
  i1918.fragmentProgram = i1919[4]
  i1918.exportedForWebGl2 = !!i1919[5]
  i1918.readDepth = !!i1919[6]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'shader')
  i1924.pass = i1925[2]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1929 = data
  i1928.name = i1929[0]
  i1928.type = i1929[1]
  i1928.value = new pc.Vec4( i1929[2], i1929[3], i1929[4], i1929[5] )
  i1928.textureValue = i1929[6]
  i1928.shaderPropertyFlag = i1929[7]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1931 = data
  i1930.name = i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'texture')
  i1930.aabb = i1931[3]
  i1930.vertices = i1931[4]
  i1930.triangles = i1931[5]
  i1930.textureRect = UnityEngine.Rect.MinMaxRect(i1931[6], i1931[7], i1931[8], i1931[9])
  i1930.packedRect = UnityEngine.Rect.MinMaxRect(i1931[10], i1931[11], i1931[12], i1931[13])
  i1930.border = new pc.Vec4( i1931[14], i1931[15], i1931[16], i1931[17] )
  i1930.transparency = i1931[18]
  i1930.bounds = i1931[19]
  i1930.pixelsPerUnit = i1931[20]
  i1930.textureWidth = i1931[21]
  i1930.textureHeight = i1931[22]
  i1930.nativeSize = new pc.Vec2( i1931[23], i1931[24] )
  i1930.pivot = new pc.Vec2( i1931[25], i1931[26] )
  i1930.textureRectOffset = new pc.Vec2( i1931[27], i1931[28] )
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1933 = data
  i1932.name = i1933[0]
  i1932.wrapMode = i1933[1]
  i1932.isLooping = !!i1933[2]
  i1932.length = i1933[3]
  var i1935 = i1933[4]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1935[i + 0]) );
  }
  i1932.curves = i1934
  var i1937 = i1933[5]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1937[i + 0]) );
  }
  i1932.events = i1936
  i1932.halfPrecision = !!i1933[6]
  i1932._frameRate = i1933[7]
  i1932.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1933[8], i1932.localBounds)
  i1932.hasMuscleCurves = !!i1933[9]
  var i1939 = i1933[10]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( i1939[i + 0] );
  }
  i1932.clipMuscleConstant = i1938
  i1932.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1933[11], i1932.clipBindingConstant)
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1943 = data
  i1942.path = i1943[0]
  i1942.hash = i1943[1]
  i1942.componentType = i1943[2]
  i1942.property = i1943[3]
  i1942.keys = i1943[4]
  var i1945 = i1943[5]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1945[i + 0]) );
  }
  i1942.objectReferenceKeys = i1944
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1949 = data
  i1948.functionName = i1949[0]
  i1948.floatParameter = i1949[1]
  i1948.intParameter = i1949[2]
  i1948.stringParameter = i1949[3]
  request.r(i1949[4], i1949[5], 0, i1948, 'objectReferenceParameter')
  i1948.time = i1949[6]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1951 = data
  i1950.center = new pc.Vec3( i1951[0], i1951[1], i1951[2] )
  i1950.extends = new pc.Vec3( i1951[3], i1951[4], i1951[5] )
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1955 = data
  var i1957 = i1955[0]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( i1957[i + 0] );
  }
  i1954.genericBindings = i1956
  var i1959 = i1955[1]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( i1959[i + 0] );
  }
  i1954.pptrCurveMapping = i1958
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1963 = data
  i1962.time = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'value')
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1965 = data
  i1964.name = i1965[0]
  var i1967 = i1965[1]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1967[i + 0]) );
  }
  i1964.layers = i1966
  var i1969 = i1965[2]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1969[i + 0]) );
  }
  i1964.parameters = i1968
  i1964.animationClips = i1965[3]
  i1964.avatarUnsupported = i1965[4]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1973 = data
  i1972.name = i1973[0]
  i1972.defaultWeight = i1973[1]
  i1972.blendingMode = i1973[2]
  i1972.avatarMask = i1973[3]
  i1972.syncedLayerIndex = i1973[4]
  i1972.syncedLayerAffectsTiming = !!i1973[5]
  i1972.syncedLayers = i1973[6]
  i1972.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1973[7], i1972.stateMachine)
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1975 = data
  i1974.id = i1975[0]
  i1974.name = i1975[1]
  i1974.path = i1975[2]
  var i1977 = i1975[3]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1977[i + 0]) );
  }
  i1974.states = i1976
  var i1979 = i1975[4]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1979[i + 0]) );
  }
  i1974.machines = i1978
  var i1981 = i1975[5]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1981[i + 0]) );
  }
  i1974.entryStateTransitions = i1980
  var i1983 = i1975[6]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1983[i + 0]) );
  }
  i1974.exitStateTransitions = i1982
  var i1985 = i1975[7]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1985[i + 0]) );
  }
  i1974.anyStateTransitions = i1984
  i1974.defaultStateId = i1975[8]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1989 = data
  i1988.id = i1989[0]
  i1988.name = i1989[1]
  i1988.cycleOffset = i1989[2]
  i1988.cycleOffsetParameter = i1989[3]
  i1988.cycleOffsetParameterActive = !!i1989[4]
  i1988.mirror = !!i1989[5]
  i1988.mirrorParameter = i1989[6]
  i1988.mirrorParameterActive = !!i1989[7]
  i1988.motionId = i1989[8]
  i1988.nameHash = i1989[9]
  i1988.fullPathHash = i1989[10]
  i1988.speed = i1989[11]
  i1988.speedParameter = i1989[12]
  i1988.speedParameterActive = !!i1989[13]
  i1988.tag = i1989[14]
  i1988.tagHash = i1989[15]
  i1988.writeDefaultValues = !!i1989[16]
  var i1991 = i1989[17]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 2, i1990, '')
  }
  i1988.behaviours = i1990
  var i1993 = i1989[18]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1993[i + 0]) );
  }
  i1988.transitions = i1992
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1999 = data
  i1998.fullPath = i1999[0]
  i1998.canTransitionToSelf = !!i1999[1]
  i1998.duration = i1999[2]
  i1998.exitTime = i1999[3]
  i1998.hasExitTime = !!i1999[4]
  i1998.hasFixedDuration = !!i1999[5]
  i1998.interruptionSource = i1999[6]
  i1998.offset = i1999[7]
  i1998.orderedInterruption = !!i1999[8]
  i1998.destinationStateId = i1999[9]
  i1998.isExit = !!i1999[10]
  i1998.mute = !!i1999[11]
  i1998.solo = !!i1999[12]
  var i2001 = i1999[13]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2001[i + 0]) );
  }
  i1998.conditions = i2000
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2005 = data
  i2004.mode = i2005[0]
  i2004.parameter = i2005[1]
  i2004.threshold = i2005[2]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2011 = data
  i2010.destinationStateId = i2011[0]
  i2010.isExit = !!i2011[1]
  i2010.mute = !!i2011[2]
  i2010.solo = !!i2011[3]
  var i2013 = i2011[4]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2013[i + 0]) );
  }
  i2010.conditions = i2012
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2017 = data
  i2016.defaultBool = !!i2017[0]
  i2016.defaultFloat = i2017[1]
  i2016.defaultInt = i2017[2]
  i2016.name = i2017[3]
  i2016.nameHash = i2017[4]
  i2016.type = i2017[5]
  return i2016
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2018 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2019 = data
  i2018.useSafeMode = !!i2019[0]
  i2018.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2019[1], i2018.safeModeOptions)
  i2018.timeScale = i2019[2]
  i2018.unscaledTimeScale = i2019[3]
  i2018.useSmoothDeltaTime = !!i2019[4]
  i2018.maxSmoothUnscaledTime = i2019[5]
  i2018.rewindCallbackMode = i2019[6]
  i2018.showUnityEditorReport = !!i2019[7]
  i2018.logBehaviour = i2019[8]
  i2018.drawGizmos = !!i2019[9]
  i2018.defaultRecyclable = !!i2019[10]
  i2018.defaultAutoPlay = i2019[11]
  i2018.defaultUpdateType = i2019[12]
  i2018.defaultTimeScaleIndependent = !!i2019[13]
  i2018.defaultEaseType = i2019[14]
  i2018.defaultEaseOvershootOrAmplitude = i2019[15]
  i2018.defaultEasePeriod = i2019[16]
  i2018.defaultAutoKill = !!i2019[17]
  i2018.defaultLoopType = i2019[18]
  i2018.debugMode = !!i2019[19]
  i2018.debugStoreTargetId = !!i2019[20]
  i2018.showPreviewPanel = !!i2019[21]
  i2018.storeSettingsLocation = i2019[22]
  i2018.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2019[23], i2018.modules)
  i2018.createASMDEF = !!i2019[24]
  i2018.showPlayingTweens = !!i2019[25]
  i2018.showPausedTweens = !!i2019[26]
  return i2018
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2020 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2021 = data
  i2020.logBehaviour = i2021[0]
  i2020.nestedTweenFailureBehaviour = i2021[1]
  return i2020
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2022 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2023 = data
  i2022.showPanel = !!i2023[0]
  i2022.audioEnabled = !!i2023[1]
  i2022.physicsEnabled = !!i2023[2]
  i2022.physics2DEnabled = !!i2023[3]
  i2022.spriteEnabled = !!i2023[4]
  i2022.uiEnabled = !!i2023[5]
  i2022.textMeshProEnabled = !!i2023[6]
  i2022.tk2DEnabled = !!i2023[7]
  i2022.deAudioEnabled = !!i2023[8]
  i2022.deUnityExtendedEnabled = !!i2023[9]
  i2022.epoOutlineEnabled = !!i2023[10]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2025 = data
  var i2027 = i2025[0]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2027[i + 0]) );
  }
  i2024.files = i2026
  i2024.componentToPrefabIds = i2025[1]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2031 = data
  i2030.path = i2031[0]
  request.r(i2031[1], i2031[2], 0, i2030, 'unityObject')
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2033 = data
  var i2035 = i2033[0]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2035[i + 0]) );
  }
  i2032.scriptsExecutionOrder = i2034
  var i2037 = i2033[1]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2037[i + 0]) );
  }
  i2032.sortingLayers = i2036
  var i2039 = i2033[2]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2039[i + 0]) );
  }
  i2032.cullingLayers = i2038
  i2032.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2033[3], i2032.timeSettings)
  i2032.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2033[4], i2032.physicsSettings)
  i2032.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2033[5], i2032.physics2DSettings)
  i2032.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2033[6], i2032.qualitySettings)
  i2032.enableRealtimeShadows = !!i2033[7]
  i2032.enableAutoInstancing = !!i2033[8]
  i2032.enableStaticBatching = !!i2033[9]
  i2032.enableDynamicBatching = !!i2033[10]
  i2032.lightmapEncodingQuality = i2033[11]
  i2032.desiredColorSpace = i2033[12]
  var i2041 = i2033[13]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( i2041[i + 0] );
  }
  i2032.allTags = i2040
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2045 = data
  i2044.name = i2045[0]
  i2044.value = i2045[1]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2049 = data
  i2048.id = i2049[0]
  i2048.name = i2049[1]
  i2048.value = i2049[2]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2053 = data
  i2052.id = i2053[0]
  i2052.name = i2053[1]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2055 = data
  i2054.fixedDeltaTime = i2055[0]
  i2054.maximumDeltaTime = i2055[1]
  i2054.timeScale = i2055[2]
  i2054.maximumParticleTimestep = i2055[3]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2057 = data
  i2056.gravity = new pc.Vec3( i2057[0], i2057[1], i2057[2] )
  i2056.defaultSolverIterations = i2057[3]
  i2056.bounceThreshold = i2057[4]
  i2056.autoSyncTransforms = !!i2057[5]
  i2056.autoSimulation = !!i2057[6]
  var i2059 = i2057[7]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2059[i + 0]) );
  }
  i2056.collisionMatrix = i2058
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.layerId = i2063[1]
  i2062.otherLayerId = i2063[2]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'material')
  i2064.gravity = new pc.Vec2( i2065[2], i2065[3] )
  i2064.positionIterations = i2065[4]
  i2064.velocityIterations = i2065[5]
  i2064.velocityThreshold = i2065[6]
  i2064.maxLinearCorrection = i2065[7]
  i2064.maxAngularCorrection = i2065[8]
  i2064.maxTranslationSpeed = i2065[9]
  i2064.maxRotationSpeed = i2065[10]
  i2064.baumgarteScale = i2065[11]
  i2064.baumgarteTOIScale = i2065[12]
  i2064.timeToSleep = i2065[13]
  i2064.linearSleepTolerance = i2065[14]
  i2064.angularSleepTolerance = i2065[15]
  i2064.defaultContactOffset = i2065[16]
  i2064.autoSimulation = !!i2065[17]
  i2064.queriesHitTriggers = !!i2065[18]
  i2064.queriesStartInColliders = !!i2065[19]
  i2064.callbacksOnDisable = !!i2065[20]
  i2064.reuseCollisionCallbacks = !!i2065[21]
  i2064.autoSyncTransforms = !!i2065[22]
  var i2067 = i2065[23]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2067[i + 0]) );
  }
  i2064.collisionMatrix = i2066
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.layerId = i2071[1]
  i2070.otherLayerId = i2071[2]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2073 = data
  var i2075 = i2073[0]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2075[i + 0]) );
  }
  i2072.qualityLevels = i2074
  var i2077 = i2073[1]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( i2077[i + 0] );
  }
  i2072.names = i2076
  i2072.shadows = i2073[2]
  i2072.anisotropicFiltering = i2073[3]
  i2072.antiAliasing = i2073[4]
  i2072.lodBias = i2073[5]
  i2072.shadowCascades = i2073[6]
  i2072.shadowDistance = i2073[7]
  i2072.shadowmaskMode = i2073[8]
  i2072.shadowProjection = i2073[9]
  i2072.shadowResolution = i2073[10]
  i2072.softParticles = !!i2073[11]
  i2072.softVegetation = !!i2073[12]
  i2072.activeColorSpace = i2073[13]
  i2072.desiredColorSpace = i2073[14]
  i2072.masterTextureLimit = i2073[15]
  i2072.maxQueuedFrames = i2073[16]
  i2072.particleRaycastBudget = i2073[17]
  i2072.pixelLightCount = i2073[18]
  i2072.realtimeReflectionProbes = !!i2073[19]
  i2072.shadowCascade2Split = i2073[20]
  i2072.shadowCascade4Split = new pc.Vec3( i2073[21], i2073[22], i2073[23] )
  i2072.streamingMipmapsActive = !!i2073[24]
  i2072.vSyncCount = i2073[25]
  i2072.asyncUploadBufferSize = i2073[26]
  i2072.asyncUploadTimeSlice = i2073[27]
  i2072.billboardsFaceCameraPosition = !!i2073[28]
  i2072.shadowNearPlaneOffset = i2073[29]
  i2072.streamingMipmapsMemoryBudget = i2073[30]
  i2072.maximumLODLevel = i2073[31]
  i2072.streamingMipmapsAddAllCameras = !!i2073[32]
  i2072.streamingMipmapsMaxLevelReduction = i2073[33]
  i2072.streamingMipmapsRenderersPerFrame = i2073[34]
  i2072.resolutionScalingFixedDPIFactor = i2073[35]
  i2072.streamingMipmapsMaxFileIORequests = i2073[36]
  i2072.currentQualityLevel = i2073[37]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2083 = data
  i2082.weight = i2083[0]
  i2082.vertices = i2083[1]
  i2082.normals = i2083[2]
  i2082.tangents = i2083[3]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i2085 = data
  i2084.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2085[0], i2084.Event)
  i2084.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i2085[1], i2084.filterSettings)
  i2084.overrideMaterialId = i2085[2]
  i2084.overrideMaterialPassIndex = i2085[3]
  i2084.overrideShaderId = i2085[4]
  i2084.overrideShaderPassIndex = i2085[5]
  i2084.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2085[6], i2084.overrideMode)
  i2084.overrideDepthState = !!i2085[7]
  i2084.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2085[8], i2084.depthCompareFunction)
  i2084.enableWrite = !!i2085[9]
  i2084.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i2085[10], i2084.stencilSettings)
  i2084.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i2085[11], i2084.cameraSettings)
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i2087 = data
  i2086.Value = i2087[0]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i2089 = data
  i2088.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2089[0], i2088.RenderQueueType)
  i2088.LayerMask = i2089[1]
  var i2091 = i2089[2]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( i2091[i + 0] );
  }
  i2088.PassNames = i2090
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i2093 = data
  i2092.overrideStencilState = !!i2093[0]
  i2092.stencilReference = i2093[1]
  i2092.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2093[2], i2092.stencilCompareFunctionValue)
  i2092.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2093[3], i2092.passOperationValue)
  i2092.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2093[4], i2092.failOperationValue)
  i2092.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2093[5], i2092.zFailOperationValue)
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i2095 = data
  i2094.overrideCamera = !!i2095[0]
  i2094.restoreCamera = !!i2095[1]
  i2094.offset = new pc.Vec4( i2095[2], i2095[3], i2095[4], i2095[5] )
  i2094.cameraFieldOfView = i2095[6]
  return i2094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MainLightShadowmapResolutionValue":4,"SupportsSoftShadows":5,"SoftShadowQualityValue":6,"ShadowDistance":7,"ShadowCascadeCount":8,"Cascade2Split":9,"Cascade3Split":10,"Cascade4Split":12,"CascadeBorder":15,"ShadowDepthBias":16,"ShadowNormalBias":17,"RequireDepthTexture":18,"RequireOpaqueTexture":19,"scriptableRendererData":20},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[33],"75":[25],"76":[25],"77":[25],"78":[25],"79":[25],"80":[25],"81":[25],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[33],"97":[13],"98":[99],"100":[99],"32":[15],"51":[11,13],"101":[42],"102":[11,13],"103":[15],"104":[33],"105":[33],"43":[42],"106":[107],"108":[15],"109":[15],"35":[32],"19":[16,15],"110":[15],"34":[32],"37":[15],"111":[15],"36":[15],"112":[15],"113":[15],"114":[15],"115":[15],"116":[15],"117":[15],"118":[16,15],"119":[15],"120":[15],"121":[15],"122":[15],"123":[16,15],"124":[15],"125":[44],"126":[44],"45":[44],"127":[44],"128":[33],"129":[33],"130":[107],"131":[15],"132":[13,15],"133":[15,16],"134":[15],"135":[16,15],"136":[13],"137":[16,15],"138":[15],"139":[107]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Processor","GroundItemStackManager","UIProgress","UnityEngine.BoxCollider","GroundItemStack","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Item","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.CanvasGroup","UIHealthBar","UnityEngine.UI.Image","UnityEngine.EventSystems.UIBehaviour","Enemy","UnityEngine.SphereCollider","UnityEngine.Animator","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","AnimationInvoke","UnityEditor.Animations.AnimatorController","Customer","UnityEngine.Texture2D","PurchaseZone_Clerk","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.ContentSizeFitter","ConveyorController","ObjectFX","UnityEngine.AudioListener","CameraManager","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshCollider","Player","YangJoystick","ItemStackManager","UIBubbleExpression","AttackRangeIndicator","ItemStack","UIManager","MainPanel","TouchArea","LunaManager","AudioManager","PoolManager","NpcManager","LoaderNpc","ArrowsManager","GameDataEditor","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","FakeLightSetup","HighResPlaneGenerator","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f3c1";

Deserializers.productName = "My project";

Deserializers.lunaInitializationTime = "03/05/2026 09:50:41";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "37274";

Deserializers.projectId = "557b5b614ba9021468899f7566834b85";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c4b10007-06ec-44ad-b207-d18a74e9cd20";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

