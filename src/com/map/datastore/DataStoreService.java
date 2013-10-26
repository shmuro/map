package com.map.datastore;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.stereotype.Component;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterOperator;

@Component
public class DataStoreService {

    private final static String MARKER_TYPE = "Marker";

    private static final String MARKER_ID_PROPERTY = "Id";

    private static final Logger logger = Logger
	    .getLogger(DataStoreService.class.getName());

    private static final DatastoreService datastore = DatastoreServiceFactory
	    .getDatastoreService();

    public void createMarker(String id) {
	Entity entity = new Entity(MARKER_TYPE);
	entity.setProperty(MARKER_ID_PROPERTY, id);
	datastore.put(entity);
    }

    public List<String> getMarkers() {
	Query query = new Query(MARKER_TYPE);
	Iterable<Entity> entities = datastore.prepare(query).asIterable();
	List<String> devices = new ArrayList<String>();
	for (Entity entity : entities) {
	    String device = (String) entity.getProperty(MARKER_ID_PROPERTY);
	    devices.add(device);
	}
	return devices;
    }

    public void delete(String id) {
	Entity entity = findById(id);
	Key key = entity.getKey();
	datastore.delete(key);
    }

    @SuppressWarnings("deprecation")
    private Entity findById(String id) {
	Query query = new Query(MARKER_TYPE).addFilter(MARKER_ID_PROPERTY,
		FilterOperator.EQUAL, id);
	PreparedQuery preparedQuery = datastore.prepare(query);
	Entity entity = preparedQuery.asSingleEntity();
	return entity;
    }
}
