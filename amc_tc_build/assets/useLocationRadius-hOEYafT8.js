import"./router-5yjtezO8.js";import{e as _}from"./index-oDcWCWwy.js";function E(){const{coords:t,timestamp:T}=_(!1),l=50,e={East_Zone:{latitude:20.7122002,longitude:77.0102968},West_Zone:{latitude:20.708891,longitude:76.9867701},North_Zone:{latitude:20.7214404,longitude:77.003902},South_Zone:{latitude:20.6937346,longitude:77.0063663}};function n(a,M,i,Z){const u=(i-a)*Math.PI/180,o=(Z-M)*Math.PI/180,s=Math.sin(u/2)*Math.sin(u/2)+Math.cos(a*Math.PI/180)*Math.cos(i*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2);return 6378137*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}const h=n(e.East_Zone.latitude,e.East_Zone.longitude,t==null?void 0:t.latitude,t==null?void 0:t.longitude),d=n(e.West_Zone.latitude,e.West_Zone.longitude,t==null?void 0:t.latitude,t==null?void 0:t.longitude),g=n(e.North_Zone.latitude,e.North_Zone.longitude,t==null?void 0:t.latitude,t==null?void 0:t.longitude),c=n(e.South_Zone.latitude,e.South_Zone.longitude,t==null?void 0:t.latitude,t==null?void 0:t.longitude);return{radiusInMeters:l,distanceToTargetEast:h,distanceToTargetWest:d,distanceToTargetNorth:g,distanceToTargetSouth:c}}export{E as u};